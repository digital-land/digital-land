workspace {
  !identifiers hierarchical

    model {
        ripa = person "RIPA" "A person using the system"
        lpa = softwareSystem "Local Planning Authority" 
        
        aws = softwareSystem "Amazon Web Services" {
            S3 = container "S3"
            ECS = container "ECS" 
        }

        group "data.planning.gov.uk" {
        
            planning_data = softwareSystem "Planning Data" "Web"{
                
                rest = container "REST API"  
                postgres = container "Postgres" "Stores geo elements." "" "Database"
    
                webapp = container "Web Application" {
                    map = component "Map"
                }
                
            } // planning_data
    
            digital_land_python = softwareSystem "Digital-Land Python" "Ingest and validate data from LPAs" {
                script = container "load.sh"
                collect = container "Collect" 
                validate = container "Validate" 
                convert = container "Convert"
                publish = container "Publish"
            }
    }
        
        
    # System Boundary Relationsips
    ripa -> planning_data.webapp "Uses"
    ripa -> planning_data.rest "Uses"

    # Container Relationships
    planning_data.rest -> planning_data.postgres "Reads from"
    
    # Component Relationships
    digital_land_python.script -> digital_land_python.collect "Get CSV files"
    digital_land_python.collect -> digital_land_python.script "CSV files"
    
    digital_land_python.script -> digital_land_python.validate 
    
    digital_land_python.script -> digital_land_python.convert "CSV"
    digital_land_python.convert -> digital_land_python.script "SQLite"
    
    digital_land_python.script -> digital_land_python.publish
    digital_land_python.collect -> aws.s3 "Reads from"
    digital_land_python.collect -> lpa "Reads from"
    digital_land_python.publish -> aws.s3 "Writes to"
    } //  model
    

    views {

        systemlandscape "SystemLandscape" {
            include *
            autoLayout lr
        }
    
        systemContext planning_data {
            include *
            autolayout rl
        }

        systemContext lpa {
            include *
            autolayout lr
        }

        component planning_data.webapp {
            include *
            autolayout lr
        }

        systemContext digital_land_python {
            include *
            autolayout lr
        }
        
        container digital_land_python {
            include *
            autolayout lr
        }
        
       dynamic digital_land_python "IngestProcess"  {
            autolayout 
            digital_land_python.script -> digital_land_python.collect
            digital_land_python.collect -> digital_land_python.script
            
            digital_land_python.collect -> aws.s3 "Read LPA Data"
            aws.s3 -> digital_land_python.collect "CSV"

            digital_land_python.script -> digital_land_python.validate
            digital_land_python.validate -> digital_land_python.script

            digital_land_python.script -> digital_land_python.convert
            digital_land_python.convert -> digital_land_python.script
            
            digital_land_python.script -> digital_land_python.publish "SQLite"
            digital_land_python.publish ->  aws.s3 "Write SQLIte LPA Data to S3"

        }

        styles {
            element "Person" {
                background #1168bd
                color #ffffff
                fontSize 22
                shape Person
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
            element "Database" {
                shape Cylinder
            }
        } // styles
    } // views

}
// https://structurizr.com/dsl

workspace {
  !identifiers hierarchical

    model {
        ripa = person "RIPA" "A person using the system"
        lpa = softwareSystem "Data Publisher Systems" 
        

        group "data.planning.gov.uk" {
        
            aws = softwareSystem "S3 Data Store" "Amazon" {
                S3 = container "S3"
                ECS = container "ECS" 
            }
        
            planning_data = softwareSystem "Planning Data" "Web"{
                postgres = container "Postgres" "Stores geo elements." "" "Database"
                fast_api_application = container "Fast API Application" "Web front end and REST API"
                datasette = container "Datasette Explorer Application" "SQLite explorer"
                datasette_tiles = container "Datasette Tiles Server"
                efs = container "EFS System"
                
            } // planning_data
            
            loaders = softwareSystem "Loaders" "Delivers collection data to AWS"
    
            digital_land_python = softwareSystem "Collections" "Ingest and validate data from LPAs. Runs on GitHub" {
                script = container "load.sh"
                collect = container "Collect" 
                validate = container "Validate" 
                convert = container "Convert"
                publish = container "Publish"
            }
    }
        
        
    # System Boundary Relationsips
    ripa -> planning_data.fast_api_application "Uses"
    ripa -> planning_data.datasette "Uses"

    # Container Relationships
    loaders -> aws.S3 "Reads from"
    planning_data -> aws.S3 "Reads from"
    
    # WEB
    planning_data.fast_api_application -> planning_data.postgres
    planning_data.fast_api_application -> planning_data.datasette
    planning_data.fast_api_application -> planning_data.datasette_tiles
    planning_data.fast_api_application -> aws
    
    planning_data.datasette -> planning_data.efs
    planning_data.datasette_tiles -> planning_data.efs
    planning_data.fast_api_application -> aws

    loaders -> planning_data "Provides Data"
    
    # Component Relationships
    digital_land_python.script -> digital_land_python.collect "Get CSV files"
    digital_land_python.collect -> digital_land_python.script "CSV files"
    
    digital_land_python.script -> digital_land_python.validate 
    
    digital_land_python.script -> digital_land_python.convert "CSV"
    digital_land_python.convert -> digital_land_python.script "SQLite"
    
    digital_land_python.script -> digital_land_python.publish
    digital_land_python.collect -> aws.s3 "Reads / Writes"
    digital_land_python.collect -> lpa "Reads from"
    digital_land_python.publish -> aws.s3 "Writes to"
    } //  model

    views {

        systemlandscape "SystemLandscape" {
            include *
        }
    
        systemContext planning_data {
            include *
            autolayout rl
        }
        
         systemContext loaders {
            include *
            autolayout lr
        }

        systemContext lpa {
            include *
            autolayout lr
        }

        component planning_data.fast_api_application {
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
        
        container planning_data  {
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
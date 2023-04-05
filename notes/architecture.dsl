/*

Architecture Overview
---------------------

This document is a 'diagram as code' representation of the current state of the 
Data Operations system. 

The document is composed of three main parts:

1. A model that describes the systems and their relationships,
2. A series of views that tell us how to look at the model
2.a A short list of styling items that control the shape and colour of diagram elements.

Displaying the diagrams

1. Copy the text, and go to Structurizr - DSL, https://structurizr.com/dsl
2. Paste the text and press the 'Render' button at the top. This generates the diagrams in the display area on the right.

Note: The structurizr web site generates a series of views from high-level to quite low level from the information in the model.

Select the [System Context] Digital-Land Python diagram from the drop-down on the right.
Note that the diagrams are somewhat interactive - if you see the 'Planning Data' Software System, it has a magnifying glass icon which means you can double-click it to open up the next level view.

*/
workspace {
  !identifiers hierarchical

    model {
        ripa = person "Data User" "A person using the system"
        lpa = softwareSystem "Data Publisher Systems" 
        
        group "Digital Land (data.planning.gov.uk)" {
        
            aws = softwareSystem "S3 Data Store" "Amazon" {
                tags "s3"
                S3 = container "S3"
                ECS = container "ECS" 
            }
        
            planning_data = softwareSystem "Planning Data" "Web"{
                postgres = container "Postgres" "Stores geo elements." {
                    tags "postgres"
                }
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
            element "postgres" {
                icon https://img.icons8.com/color/128/postgreesql.png
                shape Cylinder
            }
            element "s3" {
                shape RoundedBox
                icon https://img.icons8.com/color/2x/amazon-s3.png
            }
 
        } // styles
    } // views

}
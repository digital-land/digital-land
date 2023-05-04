# Sequence of Events in getting anbd publishing a collection

This diagram represents the processing of a collection, initiated either by a LPA Officer or by a scheduled process.

It is intended to help clarify what happen, and in what order and what triggers what.

```mermaid

sequenceDiagram
    autonumber
    participant LPAS as <external><br/>LPA System (ESRI) 
    

    box Collect and Validate
        participant Collector
        participant Validator
    end

    LPA->>Collector: Initiate Collection
    
    actor LPA as Local Planning<br> Authority

    loop On Demand / Schedule
        Collector->>+LPAS: Collect
        LPAS-->>-Collector: data
        Collector->>+Validator: Validate Collection
    end

    Validator ->> EP: Update Status

    box Review and Fix
        participant EP as <Web App><br/>Engagement Platform
    end

    EP->>LPA: Review    
    LPA->>EP: Fix
    alt Fix 
        EP ->>EP: Fix in LPA System 
        EP ->>LPAS: Update LPA
    else
        EP -->>LPAS: Fix in LPA System
    end    

    box Publish Collection
        participant Publisher
        participant LPAV as <Web App><br/>LPA View
        actor proptech
        participant planner as <Web App><br/>Data.Planner
        actor public        
    end

    LPA-)Publisher: Publish 
    Publisher->>LPAV: Publish 
    proptech-->>LPAV: Utilise
    Publisher->>planner: Publish 
    public-->>planner: View

```

You can take the contents of this diagram to https://mermaid.live/ and paste it in to see it as you edit it.

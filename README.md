# IRCRA Api

Api service for climbing grade conversions.
Based on: [IRCRA Standard][1]


## Endpoints

### Grade 
Returns the grade object for a specified grade and system.

Example:

```
/?grade=1&system=ircra
```

### System
Returns all grade objects for system param.

Example:

```
/system/vermin
```


## Model

### Grade

```
Model for:
/?grade=1&system=ircra


"1": {
      "group": "Lower Grade",
      "male": 1,
      "female": 1,
      "vermin": null,
      "font": null,
      "ircra": 1,
      "yds": "5.1",
      "french": "1",
      "british": null,
      "tech": "2",
      "ewbank": 4,
      "brz": "I sup",
      "uiaa": "I",
      "uiaa_metric": "1.00",
      "watts": null
    }
}
```

[1]: https://www.ircra.rocks/single-post/2016/09/12/Reporting-Grades-in-Climbing-Research

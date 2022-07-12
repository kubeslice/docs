# Add document in already created version

    1) Navigate to versioned_docs/<VERSION>
    2) Create a document with extension .mdx
    3) Add document in versioned_sidebars/version-<VERSION>-sidebars.json

            Example: 
                Existing file:
                    ...
                    "items": [
                        {
                        "type": "category",
                        "label": "Menu level 2",
                        "link": {
                            "type": "doc",
                            "id": "menu/menu2/index"
                        },]
                    ...
                Adding a new document "menu3 as child of menu2"
                    ...
                    "items": [
                        {
                        "type": "category",
                        "label": "Menu level 2",
                        "link": {
                            "type": "doc",
                            "id": "menu/menu2/index"
                        },
                        "items": [
                            {
                            "type": "category",
                            "label": "Menu level 3",
                            "link": {
                                "type": "doc",
                                "id" : "menu/menu2/menu3/index"
                            }
                            ]
                        ]
                    ...

    4) Enjoy!!!

# Add new version
    
## Using terminal(recommended)

    1) Run command
        npm run docusaurus docs:version <VERSION>

## Manually

    1) Create a directory under versioned_docs as "version-<VERSION>"
    2) Create a <FILENAME>.mdx file inside "version-<VERSION>"
    3) Create a json file inside versioned_sidebars as "version-<VERSION>-sidebars.json"
    4) Add the document inside "version-<VERSION>-sidebars.json"
    5) Add <VERSION> inside versions.json

# Remove version from showing up

    1) Remove <VERSION> from versions.json
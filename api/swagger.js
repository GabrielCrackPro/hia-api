const docs = {
  openapi: "3.0.0",
  info: {
    title: "Home Inventory App API",
    description: "Docs for the Home Inventory App",
    version: "1.0.0",
    license: { name: "MIT", url: "https://mit-license.org/" },
  },
  tags: [
    { name: "Items", description: "Items routes" },
    { name: "Shops", description: "Shop routes" },
  ],
  paths: {
    // Item paths
    "/api/v1/items": {
      get: {
        tags: ["Items"],
        summary: "List all the items",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    name: "exampleItem",
                    description: "This is an example item",
                    user: "633029cabff58949890342b7",
                    _id: "63302a3ebff58949890342bb",
                    // eslint-disable-next-line
                    created_at: "2022-09-25T10:15:26.214Z",
                    // eslint-disable-next-line
                    updated_at: "2022-09-25T10:15:26.214Z",
                  }
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Items"],
        summary: "Create an item",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the item",
                    example: "Table",
                  },
                  description: {
                    type: "string",
                    description: "Description of the item",
                    example: "Wood table",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    message: "Item saved",
                    item: {
                      name: "exampleItem",
                      description: "This is an example item",
                      user: "633029cabff58949890342b7",
                      _id: "63302a3ebff58949890342bb",
                      // eslint-disable-next-line
                      created_at: "2022-09-25T10:15:26.214Z",
                      // eslint-disable-next-line
                      updated_at: "2022-09-25T10:15:26.214Z",
                      __v: 0
                    }

                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
      delete: {
        tags: ["Items"],
        summary: "Delete all items",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    message: "All items deleted successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/items/{id}": {
      get: {
        tags: ["Items"],
        summary: "Get an item by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Item id",
            schema: {
              type: "integer",
              format: "int32",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    name: "exampleItem",
                    description: "This is an example item",
                    user: "633029cabff58949890342b7",
                    _id: "63302a3ebff58949890342bb",
                    // eslint-disable-next-line
                    created_at: "2022-09-25T10:15:26.214Z",
                    // eslint-disable-next-line
                    updated_at: "2022-09-25T10:15:26.214Z",
                    __v: 0
                  },
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Items"],
        summary: "Update an item by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Item id",
            schema: {
              type: "integer",
              format: "int32",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    message: "Item updated successfully",
                    item: {
                      _id: "63302a3ebff58949890342bb",
                      name: "exampleItem",
                      description: "This is an updated item",
                      user: "633029cabff58949890342b7",
                      // eslint-disable-next-line
                      created_at: "2022-09-25T10:15:26.214Z",
                      // eslint-disable-next-line
                      updated_at: "2022-09-25T10:47:48.217Z",
                      __v: 0
                    }

                  },
                },
              },
            },
          },
        },
        delete: {
          tags: ["Items"],
          summary: "Delete an item by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Item id",
              schema: {
                type: "integer",
                format: "int32",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      message: "Item deleted successfully",
                      name: "Table",
                      description: "Wood table",
                    },
                  },
                },
              },
            },
          },
        },
      },
      // Shop paths

      "/api/v1/shops": {
        get: {
          tags: ["Shops"],
          summary: "List all the shops",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      name: "Test Shop",
                      description: "Test Shop",
                      type: "physical",
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Shops"],
          summary: "Create a shop",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      description: "Name of the shop",
                      example: "Starbucks",
                    },
                    description: {
                      type: "string",
                      description: "Description of the shop",
                      example: "Coffee shop",
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      message: "Shop saved",
                      item: {
                        name: "Starbucks",
                        description: "Coffee shop",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
            },
          },
        },
        delete: {
          tags: ["Shops"],
          summary: "Delete all shops",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      message: "All shops deleted successfully",
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/shops/{id}": {
        get: {
          tags: ["Shops"],
          summary: "Get a shop by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Shop id",
              schema: {
                type: "integer",
                format: "int32",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      name: "Starbucks",
                      description: "Coffee shop",
                    },
                  },
                },
              },
            },
          },
        },
        put: {
          tags: ["Shops"],
          summary: "Update a shop by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Shop id",
              schema: {
                type: "integer",
                format: "int32",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      message: "Shop updated successfully",
                      name: "Starbucks",
                      description: "Cooffe shop",
                    },
                  },
                },
              },
            },
          },
        },
        delete: {
          tags: ["Shops"],
          summary: "Delete a shop by id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Item id",
              schema: {
                type: "integer",
                format: "int32",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example: {
                      message: "Shop deleted successfully",
                      name: "Starbucks",
                      description: "Cooffe Shop",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }
};

module.exports = { docs };

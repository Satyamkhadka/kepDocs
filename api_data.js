define({ "api": [
  {
    "type": "get",
    "url": "(nothing)",
    "title": "",
    "name": "none",
    "group": "Test",
    "description": "<p>this api is just for checkings and all this api basically has no input as well as output</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnableToConnect",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Routes.js",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "userForAdminDashboard",
    "title": "",
    "name": "Get_User_For_Admin_DashBoard",
    "group": "User",
    "description": "<p>this api gives data for admin panel data includes employee details</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee's Id</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "fullName",
            "description": "<p>FullName of the Employee</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "typeOfEmployee",
            "description": "<p>Type Of Employee must be Intern Admin or Employee</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "department",
            "description": "<p>Department of work</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "officialEmail",
            "description": "<p>Self-Explanatory</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "joinDate",
            "description": "<p>Joined date of employee Y-M-D format(default sql format)</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "MobileNumber",
            "description": "<p>Self-Explanatory</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date of the Employee (if it exists employee no longer works for the company)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n\"employeeId\":165,\n\"fullName\":\"manisha\",\n\"typeOfEmployee\":\"owner\",\n\"department\":\"sdptfgdf\",\n\"officialEmail\":\"hghjhhfgh\",\n\"joinDate\":\"1999-10-20T18:15:00.000Z\",\n\"MobileNumber\":\"sataaf\",\n\"endDate\":\"1999-10-20T18:15:00.000Z\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SQL_Error",
            "description": "<p>sql failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Routes.js",
    "groupTitle": "User"
  }
] });

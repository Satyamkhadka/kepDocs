define({ "api": [
  {
    "type": "get",
    "url": "/employeeNamesAndId/",
    "title": "get all employee and id",
    "group": "Attendance",
    "description": "<p>this api employee name and employee id for the dropdown menu in search</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"employeeId\": 2,\n      \"fullName\": \"satyam khadka\"\n  }",
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
    "filename": "./documentation.js",
    "groupTitle": "Attendance",
    "name": "GetEmployeenamesandid"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E__Satyam_kip_api_docs_doc_main_js",
    "groupTitle": "E__Satyam_kip_api_docs_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/sendMail",
    "title": "Send Mail to employee on login",
    "group": "Email",
    "description": "<p>This api sends email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "to",
            "description": "<p>receivers email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "subject",
            "description": "<p>subject of mail</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>name of the recipiant</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "userName",
            "description": "<p>login email of the employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>login password of the user</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Email",
    "name": "PostSendmail"
  },
  {
    "type": "delete",
    "url": "/deletePlayer",
    "title": "deletes member from the futsal team",
    "group": "Futsal",
    "description": "<p>this api deletes from the futsal team</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    'success':'true',\n    'message':'Successfully deleted player Number 1'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "{\n    'success':'false',\n    'message':'Error deleting'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./futsalDoc.js",
    "groupTitle": "Futsal",
    "name": "DeleteDeleteplayer"
  },
  {
    "type": "get",
    "url": "/readMember",
    "title": "gets all team info",
    "group": "Futsal",
    "description": "<p>this api gets all team members info</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  'ss'='ss' \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "{\n    'success':'false',\n    'message':'Error in adding player to the team'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./futsalDoc.js",
    "groupTitle": "Futsal",
    "name": "GetReadmember"
  },
  {
    "type": "post",
    "url": "/addEmployee",
    "title": "adds member to the futsal team",
    "group": "Futsal",
    "description": "<p>this api addss member to the futsal team</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    'success':'true',\n    'message':'user name Successfully added to the team'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "{\n    'success':'false',\n    'message':'Error in adding player to the team'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./futsalDoc.js",
    "groupTitle": "Futsal",
    "name": "PostAddemployee"
  },
  {
    "type": "put",
    "url": "/addMember",
    "title": "updates member to the futsal team",
    "group": "Futsal",
    "description": "<p>this api updates member to the futsal team</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    'success':'true',\n    'message':'user name Successfully updated to the team'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "{\n    'success':'false',\n    'message':'Error in updating player to the team'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./futsalDoc.js",
    "groupTitle": "Futsal",
    "name": "PutAddmember"
  },
  {
    "type": "get",
    "url": "/populateLeaveRequests/:year/:month",
    "title": "Get Leave Request in a month",
    "group": "Leave",
    "description": "<p>this api gets data to populate in admin panel</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n   \"fullname\": \"satyam khadka\",\n    \"typeOfLeave\": \"paid\",\n    \"dateRequested\": \"2019-05-01T18:15:00.000Z\",\n    \"leaveStartDate\": \"2019-05-31T18:15:00.000Z\",\n     \"leaveEndDate\": \"2019-06-04T18:15:00.000Z\",\n     \"status\": \"pending\"\n}",
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
    "filename": "./documentation.js",
    "groupTitle": "Leave",
    "name": "GetPopulateleaverequestsYearMonth"
  },
  {
    "type": "post",
    "url": "/createLeaveRequest",
    "title": "Create Leave Request",
    "group": "Leave",
    "description": "<p>This api creates leave request</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "leaveStartDate",
            "description": "<p>starting date of the leave</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "leaveEndDate",
            "description": "<p>ending date of the leave</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "typeOfLeave",
            "description": "<p>type of leave (paid unpaid)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "employeeId",
            "description": "<p>employee id</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Leave",
    "name": "PostCreateleaverequest"
  },
  {
    "type": "put",
    "url": "/changeLeaveStatus",
    "title": "Change Leave Status",
    "group": "Leave",
    "description": "<p>This api changes leave status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "status",
            "description": "<p>status of leave(accepted rejected)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "leaveId",
            "description": "<p>leaveid of the employee</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Leave",
    "name": "PutChangeleavestatus"
  },
  {
    "type": "post",
    "url": "/mockLogin",
    "title": "Login",
    "group": "Login",
    "description": "<p>login</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n\"success\": true,\n \"message\": \"Authentication successful!\",\n \"token\": \"eyJvU0k token token example\"\n }",
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
            "field": "TokenError",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   {\n\"success\": false,\n \"message\": \"Email or password does not match.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Login",
    "name": "PostMocklogin"
  },
  {
    "type": "delete",
    "url": "/deleteNotice/:id",
    "title": "Delete Notice",
    "group": "Notice",
    "description": "<p>This deletes notice by id</p>",
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Notice",
    "name": "DeleteDeletenoticeId"
  },
  {
    "type": "get",
    "url": "/readNotice",
    "title": "Read Notice",
    "group": "Notice",
    "description": "<p>this api gets data to populate in admin panel</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n   \"noticeId\": 4,\n    \"date\": \"2019-05-01T18:15:00.000Z\",\n     \"Nheading\": \"this is heading\",\n     \"description\": \" this is descriptin . description cannot be better than this.\",\n     \"visibility\": \"1\"\n}",
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
    "filename": "./documentation.js",
    "groupTitle": "Notice",
    "name": "GetReadnotice"
  },
  {
    "type": "post",
    "url": "/createNotice",
    "title": "Create Notice",
    "group": "Notice",
    "description": "<p>This api creates notice</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "heading",
            "description": "<p>Heading of the notice</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>content of the notice</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Notice",
    "name": "PostCreatenotice"
  },
  {
    "type": "delete",
    "url": "/deleteReminder/:id",
    "title": "Delete Reminder",
    "group": "Reminder",
    "description": "<p>This deletes reminder by id</p>",
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Reminder",
    "name": "DeleteDeletereminderId"
  },
  {
    "type": "get",
    "url": "/readReminder",
    "title": "Read Reminder",
    "group": "Reminder",
    "description": "<p>this api gets reminder</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n    \"reminderId\": 1,\n    \"heading\": \"remind me this\",\n    \"description\": \"my name is satyam.. \",\n    \"rDate\": \"2019-05-01T18:15:00.000Z\",\n    \"rTime\": \"10:10:10\",\n    \"days\": \"s,m,t,w,t,f,sa\",\n    \"visibility\": \"1\"\n}",
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
    "filename": "./documentation.js",
    "groupTitle": "Reminder",
    "name": "GetReadreminder"
  },
  {
    "type": "post",
    "url": "/createReminder",
    "title": "Create Reminder",
    "group": "Reminder",
    "description": "<p>This api creates Reminder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "heading",
            "description": "<p>heading of the reminder</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>description of the reminder</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "date",
            "description": "<p>date of reminder</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "time",
            "description": "<p>time of reminder to be set</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "days",
            "description": "<p>days to be reminded (csv format... (s,m,t,w,t,f,sa))</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "Reminder",
    "name": "PostCreatereminder"
  },
  {
    "type": "get",
    "url": "/",
    "title": "test url",
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
    "filename": "./documentation.js",
    "groupTitle": "Test",
    "name": "Get"
  },
  {
    "type": "delete",
    "url": "/deleteEmployee/:employeeId",
    "title": "Delete employee",
    "group": "User",
    "description": "<p>deletes user</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 202 Accepted",
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
    "filename": "./documentation.js",
    "groupTitle": "User",
    "name": "DeleteDeleteemployeeEmployeeid"
  },
  {
    "type": "get",
    "url": "/employee/:employeeId",
    "title": "Get employee by id",
    "group": "User",
    "description": "<p>this api gives data for showing user details by id</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n{\n    \"employeeId\": 3,\n   \"fullName\": \"satyam khadka\",\n      \"typeOfEmployee\": \"intern\",\n      \"gender\": \"male\",\n      \"DOB\": \"1999-10-20T18:15:00.000Z\",\n      \"phoneNumber\": \"9862679609\",\n      \"mobileNumber\": \"9815004608\",\n      \"profilePic\": \"default.png\",\n      \"officialEmail\": \"satyamkhadka@krennovatech.com\",\n      \"personalEmail\": \"satyam.khadka123@gmail.com\",\n      \"citizenshipNumber\": \"124\",\n      \"citizenshipDigitalCopy\": \"citizenDigitalCopy_1556779639937.jpg\",\n       \"permaAddressId\": 25,\n       \"permaStreet\": \"somewhere\",\n       \"permaCity\": \"somewhere\",\n       \"permaProvince\": \"somewhere\",\n       \"permaCountry\": \"somewhere\",\n       \"permaZipCode\": \"55\",\n       \"permaAddressType\": \"P\",\n       \"tempAddressId\": 24,\n       \"tempStreet\": \"somewhere\",\n       \"tempCity\": \"somewhere\",\n       \"tempProvince\": \"somewhere\",\n       \"tempCountry\": \"somewhere\",\n       \"tempZipCode\": \"55\",\n       \"tempAddressType\": \"T\",\n      \"professionalId\": 2,\n      \"joinDate\": \"2019-05-04T18:15:00.000Z\",\n      \"endDate\": \"0000-00-00\",\n      \"department\": \"development\",\n      \"resume\": \"resume_1556779639938.jpg\",\n      \"skill\": \"node\",\n      \"emergencyContactId\": 2,\n      \"eFullName\": \"someone\",\n      \"eMobileNo\": \"9898989898\",\n      \"email\": \"sosdlj\",\n      \"relationship\": \"relation\"\n     \"userName\": \"MRsatyam\"\n     }",
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
    "filename": "./documentation.js",
    "groupTitle": "User",
    "name": "GetEmployeeEmployeeid"
  },
  {
    "type": "get",
    "url": "/employees",
    "title": "All employee detail",
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
          "content": "   {\n{\n    \"employeeId\": 3,\n   \"fullName\": \"satyam khadka\",\n      \"typeOfEmployee\": \"intern\",\n      \"gender\": \"male\",\n      \"DOB\": \"1999-10-20T18:15:00.000Z\",\n      \"phoneNumber\": \"9862679609\",\n      \"mobileNumber\": \"9815004608\",\n      \"profilePic\": \"default.png\",\n      \"officialEmail\": \"satyamkhadka@krennovatech.com\",\n      \"personalEmail\": \"satyam.khadka123@gmail.com\",\n      \"citizenshipNumber\": \"124\",\n      \"citizenshipDigitalCopy\": \"citizenDigitalCopy_1556779639937.jpg\",\n       \"permaAddressId\": 25,\n       \"permaStreet\": \"somewhere\",\n       \"permaCity\": \"somewhere\",\n       \"permaProvince\": \"somewhere\",\n       \"permaCountry\": \"somewhere\",\n       \"permaZipCode\": \"55\",\n       \"permaAddressType\": \"P\",\n       \"tempAddressId\": 24,\n       \"tempStreet\": \"somewhere\",\n       \"tempCity\": \"somewhere\",\n       \"tempProvince\": \"somewhere\",\n       \"tempCountry\": \"somewhere\",\n       \"tempZipCode\": \"55\",\n       \"tempAddressType\": \"T\",\n      \"professionalId\": 2,\n      \"joinDate\": \"2019-05-04T18:15:00.000Z\",\n      \"endDate\": \"0000-00-00\",\n      \"department\": \"development\",\n      \"resume\": \"resume_1556779639938.jpg\",\n      \"skill\": \"node\",\n      \"emergencyContactId\": 2,\n      \"eFullName\": \"someone\",\n      \"eMobileNo\": \"9898989898\",\n      \"email\": \"sosdlj\",\n      \"relationship\": \"relation\"\n       \"userName\": \"mrSatyam\"\n     }",
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
    "filename": "./documentation.js",
    "groupTitle": "User",
    "name": "GetEmployees"
  },
  {
    "type": "post",
    "url": "/createEmployee",
    "title": "Create Employee",
    "group": "User",
    "description": "<p>This api creates new User (employee) multipart/form-data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "typeOfEmployee",
            "description": "<p>Type of Employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "fullName",
            "description": "<p>full name of employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth(Y-M-D) default sql format</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "officialEmail",
            "description": "<p>official email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "personalEmail",
            "description": "<p>personal email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "citizenshipNo",
            "description": "<p>citizenship number (must have)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempStreet",
            "description": "<p>Temporary street address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempCity",
            "description": "<p>Temporary city name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempProvince",
            "description": "<p>Temporary province</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempCountry",
            "description": "<p>temporary country</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempZipCode",
            "description": "<p>temp zip code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaStreet",
            "description": "<p>permanent street address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaCity",
            "description": "<p>permanenet city address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaProvince",
            "description": "<p>permanent province</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaCountry",
            "description": "<p>permanent country</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaZipCode",
            "description": "<p>permanent zip code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "joinDate",
            "description": "<p>joind date (Y-M-D) sql default</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endDate",
            "description": "<p>(y-m-d) sql default</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "department",
            "description": "<p>department</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "skill",
            "description": "<p>skills (comma seperated or any string)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "EFullName",
            "description": "<p>Emergency contact's full name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "EMobileNumber",
            "description": "<p>Emergency contacts number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Emergency contact email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "relationship",
            "description": "<p>realtionship of emergency contact personnel to the employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "citizenDigitalCopy",
            "description": "<p>sent from multipart/form-data header</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "resume",
            "description": "<p>sent from multipart/form-data header</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "userName",
            "description": "<p>username of the employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password md5</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "User",
    "name": "PostCreateemployee"
  },
  {
    "type": "put",
    "url": "/updateEmployee",
    "title": "Update employee",
    "group": "User",
    "description": "<p>This api updates User (employee) multipart/form-data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "employeeId",
            "description": "<p>employee's id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "typeOfEmployee",
            "description": "<p>Type of Employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "fullName",
            "description": "<p>full name of employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth(Y-M-D) default sql format</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "officialEmail",
            "description": "<p>official email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "personalEmail",
            "description": "<p>personal email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "citizenshipNo",
            "description": "<p>citizenship number (must have)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempStreet",
            "description": "<p>Temporary street address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempCity",
            "description": "<p>Temporary city name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempProvince",
            "description": "<p>Temporary province</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempCountry",
            "description": "<p>temporary country</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "tempZipCode",
            "description": "<p>temp zip code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaStreet",
            "description": "<p>permanent street address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaCity",
            "description": "<p>permanenet city address</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaProvince",
            "description": "<p>permanent province</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaCountry",
            "description": "<p>permanent country</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "permaZipCode",
            "description": "<p>permanent zip code</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "joinDate",
            "description": "<p>joind date (Y-M-D) sql default</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endDate",
            "description": "<p>(y-m-d) sql default</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "department",
            "description": "<p>department</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "skill",
            "description": "<p>skills (comma seperated or any string)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "EFullName",
            "description": "<p>Emergency contact's full name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "EMobileNumber",
            "description": "<p>Emergency contacts number</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Emergency contact email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "relationship",
            "description": "<p>realtionship of emergency contact personnel to the employee</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "citizenDigitalCopy",
            "description": "<p>sent from multipart/form-data header</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "resume",
            "description": "<p>sent from multipart/form-data header</p>"
          }
        ]
      }
    },
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
            "field": "SQLError",
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
    "filename": "./documentation.js",
    "groupTitle": "User",
    "name": "PutUpdateemployee"
  }
] });

"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json"

// Create a database , give it name like ""Human_Resource"". 

// test>show dbs;

// test>
// admin            40.00 KiB
// classdb         112.00 KiB
// config           96.00 KiB
// courses           8.00 KiB
// local            40.00 KiB

// test> use Human_Resource
// Human_Resource>
// test> show dbs
// HumanResource  40.00 KiB
// admin          40.00 KiB
// config         96.00 KiB
// local          40.00 KiB
// test> use HumanResource
// switched to db HumanResource
// HumanResource> db.employee.insertMany([{
// ...        "firstName": "John",
// ...        "lastName": "Doe",
// ...        "salary": "25000",
// ...        "department": "HR",
// ...        "lastCompany": "X",
// ...        "lastSalary": "10000",
// ...        "overallExp": "2",
// ...        "contactInfo": "1234567890",
// ...        "yearGrad": "2016",
// ...        "gradStream": "CSE"
// ...      },
// ...      {
// ...        "firstName": "Rohan",
// ...        "lastName": "Jame",
// ...        "salary": "30000",
// ...        "department": "Technical",
// ...        "lastCompany": "Y",
// ...        "lastSalary": "15000",
// ...        "overallExp": "1",
// ...        "contactInfo": "1234567860",
// ...        "yearGrad": "2015",
// ...        "gradStream": "CSE"
// ...      },
// ...      {
// ...        "firstName": "Jame",
// ...        "lastName": "Doe",
// ...        "salary": "35000",
// ...        "department": "Accounts",
// ...        "lastCompany": "Z",
// ...    "lastSalary": "20000",
// ...        "overallExp": "1",
// ...        "contactInfo": "123567890",
// ...        "yearGrad": "2019",
// ...        "gradStream": "ECE"
// ...      },
// ...      {
// ...        "firstName": "Sao",
// ...        "lastName": "Avika",
// ...        "salary": "30000",
// ...        "department": "Sales",
// ...        "lastCompany": "Y",
// ...        "lastSalary": "15000",
// ...        "overallExp": "2",
// ...        "contactInfo": "1234567860",
// ...        "yearGrad": "2015",
// ...        "gradStream": "CSE"
// ...      },
// ...      {
// ...        "firstName": "Jame",
// ...        "lastName": "roh",
// ...        "salary": "35000",
// ...        "department": "Accounts",
// ...        "lastCompany": "Z",
// ...        "lastSalary": "15000",
// ...        "overallExp": "2",
// ...        "contactInfo": "123567890",
// ...        "yearGrad": "2019",
// ...        "gradStream": "EEE"
// ...  },
// ...      {
// ...        "firstName": "Rohan",
// ...        "lastName": "Jame",
// ...        "salary": "30000",
// ...        "department": "Technical",
// ...         "lastCompany": "Y",
// ...        "lastSalary": "15000",
// ...        "overallExp": "1",
// ...        "contactInfo": "1234567860",
// ...        "yearGrad": "2015",
// ...        "gradStream": "CSE"
// ...      },
// ...      {
// ...        "firstName": "Jame",
// ...        "lastName": "Doe",
// ...        "salary": "35000",
// ...        "department": "Accounts",
// ...        "lastCompany": "Z",
// ...        "lastSalary": "20000",
// ...        "overallExp": "1",
// ...        "contactInfo": "123567890",
// ...        "yearGrad": "2019",
// ...        "gradStream": "ECE"
// ...      },
// ...      {
// ...        "firstName": "Sao",
// ...        "lastName": "Avika",
// ...        "salary": "30000",
// ...        "department": "Sales",
// ...        "lastCompany": "Y",
// ...        "lastSalary": "15000",
// ...    "overallExp": "2",
// ...        "contactInfo": "1234567860",
// ...        "yearGrad": "2015",
// ...        "gradStream": "CSE"
// ...     },
// ...      {
// ...    "firstName": "Jame",
// ...        "lastName": "Doe",
// ...        "salary": "35000",
// ...        "department": "Accounts",
// ...        "lastCompany": "Z",
// ...        "lastSalary": "15000",
// ...        "overallExp": "2",
// ...        "contactInfo": "123567890",
// ...        "yearGrad": "2019",
// ...        "gradStream": "EEE"
// ...      },
// ...      {
// ...        "firstName": "Rohan",
// ...        "lastName": "Jame",
// ...        "salary": "30000",
// ...        "department": "Technical",
// ...        "lastCompany": "Y",
// ...        "lastSalary": "15000",
// ...        "overallExp": "1",
// ...        "contactInfo": "1234567860",
// ...        "yearGrad": "2015",
// ...        "gradStream": "CSE"
// ...      },
// ...      {
// ...            "firstName": "Jame",
// ...            "lastName": "Doe",
// ...            "salary": "35000",
// ...            "department": "Accounts",
// ...            "lastCompany": "Z",
// ...            "lastSalary": "20000",
// ...            "overallExp": "1",
// ...            "contactInfo": "123567890",
// ...            "yearGrad": "2019",
// ...            "gradStream": "ECE"
// ...          },
// ...
// ...      {
// ...            "firstName": "Sao",
// ...            "lastName": "Avika",
// ...            "salary": "30000",
// ...            "department": "Sales",
// ...            "lastCompany": "Y",
// ...            "lastSalary": "15000",
// ...            "overallExp": "2",
// ...            "contactInfo": "1234567860",
// ...            "yearGrad": "2015",
// ...            "gradStream": "CSE"
// ...          },
// ...      {
// ...        "firstName": "Jame",
// ...        "lastName": "Doe",
// ...        "salary": "35000",
// ...        "department": "Accounts",
// ...        "lastCompany": "Z",
// ...        "lastSalary": "15000",
// ...        "overallExp": "2",
// ...        "contactInfo": "123567890",
// ...        "yearGrad": "2019",
// ...        "gradStream": "EEE"
// ...      }]);
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("638219119fd287b9083c4fd9"),
//     '1': ObjectId("638219119fd287b9083c4fda"),
//     '2': ObjectId("638219119fd287b9083c4fdb"),
//     '3': ObjectId("638219119fd287b9083c4fdc"),
//     '4': ObjectId("638219119fd287b9083c4fdd"),
//     '5': ObjectId("638219119fd287b9083c4fde"),
//     '6': ObjectId("638219119fd287b9083c4fdf"),
//     '7': ObjectId("638219119fd287b9083c4fe0"),
//     '8': ObjectId("638219119fd287b9083c4fe1"),
//     '9': ObjectId("638219119fd287b9083c4fe2"),
//     '10': ObjectId("638219119fd287b9083c4fe3"),
//     '11': ObjectId("638219119fd287b9083c4fe4"),
//     '12': ObjectId("638219119fd287b9083c4fe5")
//   }
// }
HumanResource> db.employee.find().pretty();
[
  {
    _id: ObjectId("638219119fd287b9083c4fd9"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fda"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdb"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdc"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fde"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdf"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe0"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe2"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe3"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe4"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
// HumanResource> db.employee.find({
// ...   "salary" : { $gt:"30000"}
// ... });
// HumanResource> db.employee.find({
// ...   "salary" : { $gt:"30000"}
// ... });
[
  {
    _id: ObjectId("638219119fd287b9083c4fdb"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdf"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe3"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
// HumanResource> db.employee.find({
// ...    "overallExp":{ $gt : "2"}
// ...    });

// HumanResource> db.employee.find({
// ...    "overallExp":{ $gt : "2"}
// ...    });

// HumanResource> db.employee.find({
// ...      $and:
// ...      [
// ...        {
// ...          "yearGrad": { $gt : "2015"}
// ...        },
// ...        {
// ...          "overallExp": { $gt : "1"}
// ...        }
// ...      ]
// ...
// ...    });
[
  {
    _id: ObjectId("638219119fd287b9083c4fd9"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdd"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe1"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe5"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
// HumanResource> db.employee.updateMany(
// ...      {
// ...        "salary": "70000"
// ...      },
// ...      {
// ...          $set:{
// ...            "salary": "65000"
// ...          }
// ...      }
// ...      );
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// HumanResource>  db.employee.find({
// ...    "lastCompany":"Y"
// ...   })
[
  {
    _id: ObjectId("638219119fd287b9083c4fda"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fdc"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fde"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe0"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe2"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("638219119fd287b9083c4fe4"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  }
]
// HumanResource> db.employee.deleteMany({
// ...      "lastCompany":"Y"
// ...      });
// { acknowledged: true, deletedCount: 6 }
// HumanResource>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// HumanResource> db.employee.deleteMany({
// ...      "lastCompany":"Y"
// ...      });
// HumanResource>

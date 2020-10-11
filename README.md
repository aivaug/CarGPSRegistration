# VehicleGPSRegistrationSystem

Project created using .NET Core 3.1, ReactJs 16.13 

----
#### Installation
- To get database ready, run commands below in your console
> `C:\fakePath\User>sqlcmd`
> `1> CREATE DATABASE VehicleGPS`
> `2> GO`
> `3> USE VehicleGPS`
> `4> GO`
> `5> CREATE LOGIN VehicleGPSUser WITH PASSWORD = 'VehicleGPSUserPassword';`
> `6> CREATE USER VehicleGPSUser FOR LOGIN VehicleGPSUser`
> `7> GO`
> `8> EXEC sp_addrolemember N'db_datareader', N'VehicleGPSUser'`
> `9> EXEC sp_addrolemember N'db_datawriter', N'VehicleGPSUser'`
> `10> EXEC sp_addrolemember N'db_ddladmin', N'VehicleGPSUser'`
> `11> GO`

- To prepare backend environment you have to write in console:
> `update-database`

- To prepare frontend environmet you have to run:
> `npm install`
> `npm start`

- you have to change your backend api port
> `frontend/src/Utils/api.js`

Database seed automatically create Admin user with credentials:
Email: 		admin
Password: 	SystemAdminPasswordForGPS*2

To push location data to database you have to create API key, get vehicle id(Guid) and make post request to:
https://localhost:{backendPort}/api/location/{VehicleID}/{APIKey}
request body example:

{
    "Latitude": "55",
    "Longitude": "55",
    "Speed": 55
}

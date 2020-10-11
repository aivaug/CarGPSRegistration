using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class locationadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Location_Users_CreatedById",
                table: "Location");

            migrationBuilder.DropForeignKey(
                name: "FK_Location_Vehicles_vehicleId",
                table: "Location");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Location",
                table: "Location");

            migrationBuilder.RenameTable(
                name: "Location",
                newName: "Locations");

            migrationBuilder.RenameIndex(
                name: "IX_Location_vehicleId",
                table: "Locations",
                newName: "IX_Locations_vehicleId");

            migrationBuilder.RenameIndex(
                name: "IX_Location_CreatedById",
                table: "Locations",
                newName: "IX_Locations_CreatedById");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Locations",
                table: "Locations",
                column: "Id");

            migrationBuilder.InsertData(
                table: "APIKeys",
                columns: new[] { "Id", "CreatedById", "CreatedDate", "IsActive", "IsDeleted", "Key", "ValidTo" },
                values: new object[] { 1, null, new DateTime(2020, 10, 10, 19, 24, 26, 831, DateTimeKind.Local).AddTicks(2709), true, false, "123456789", new DateTime(2020, 10, 15, 19, 24, 26, 831, DateTimeKind.Local).AddTicks(3323) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 19, 24, 26, 828, DateTimeKind.Local).AddTicks(6984));

            migrationBuilder.InsertData(
                table: "Vehicles",
                columns: new[] { "Id", "Brand", "CreatedById", "CreatedDate", "IsDeleted", "Model", "YearManufactured" },
                values: new object[] { new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"), "BMW", null, new DateTime(2020, 10, 10, 19, 24, 26, 830, DateTimeKind.Local).AddTicks(9103), false, "e90", "2019" });

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Users_CreatedById",
                table: "Locations",
                column: "CreatedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Vehicles_vehicleId",
                table: "Locations",
                column: "vehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Users_CreatedById",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Vehicles_vehicleId",
                table: "Locations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Locations",
                table: "Locations");

            migrationBuilder.DeleteData(
                table: "APIKeys",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"));

            migrationBuilder.RenameTable(
                name: "Locations",
                newName: "Location");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_vehicleId",
                table: "Location",
                newName: "IX_Location_vehicleId");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_CreatedById",
                table: "Location",
                newName: "IX_Location_CreatedById");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Location",
                table: "Location",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 19, 17, 15, 549, DateTimeKind.Local).AddTicks(2961));

            migrationBuilder.AddForeignKey(
                name: "FK_Location_Users_CreatedById",
                table: "Location",
                column: "CreatedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Location_Vehicles_vehicleId",
                table: "Location",
                column: "vehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

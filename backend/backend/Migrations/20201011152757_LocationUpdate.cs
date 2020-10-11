using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class LocationUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Users_CreatedById",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Vehicles_vehicleId",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Locations");

            migrationBuilder.RenameColumn(
                name: "vehicleId",
                table: "Locations",
                newName: "VehicleId");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_vehicleId",
                table: "Locations",
                newName: "IX_Locations_VehicleId");

            migrationBuilder.UpdateData(
                table: "APIKeys",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ValidTo" },
                values: new object[] { new DateTime(2020, 10, 11, 18, 27, 56, 176, DateTimeKind.Local).AddTicks(2742), new DateTime(2020, 10, 16, 18, 27, 56, 176, DateTimeKind.Local).AddTicks(3417) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2020, 10, 11, 18, 27, 56, 171, DateTimeKind.Local).AddTicks(5590));

            migrationBuilder.UpdateData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                column: "CreatedDate",
                value: new DateTime(2020, 10, 11, 18, 27, 56, 175, DateTimeKind.Local).AddTicks(8106));

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_APIKeys_CreatedById",
                table: "Locations",
                column: "CreatedById",
                principalTable: "APIKeys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_Vehicles_VehicleId",
                table: "Locations",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_APIKeys_CreatedById",
                table: "Locations");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_Vehicles_VehicleId",
                table: "Locations");

            migrationBuilder.RenameColumn(
                name: "VehicleId",
                table: "Locations",
                newName: "vehicleId");

            migrationBuilder.RenameIndex(
                name: "IX_Locations_VehicleId",
                table: "Locations",
                newName: "IX_Locations_vehicleId");

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Locations",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "APIKeys",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ValidTo" },
                values: new object[] { new DateTime(2020, 10, 10, 23, 57, 15, 626, DateTimeKind.Local).AddTicks(6205), new DateTime(2020, 10, 15, 23, 57, 15, 626, DateTimeKind.Local).AddTicks(7231) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 23, 57, 15, 622, DateTimeKind.Local).AddTicks(4262));

            migrationBuilder.UpdateData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 23, 57, 15, 625, DateTimeKind.Local).AddTicks(9346));

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
    }
}

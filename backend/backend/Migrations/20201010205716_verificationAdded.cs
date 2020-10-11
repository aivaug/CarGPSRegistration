using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class verificationAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "speed",
                table: "Locations",
                newName: "Speed");

            migrationBuilder.AddColumn<bool>(
                name: "IsVerificationSent",
                table: "Users",
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsVerificationSent",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Speed",
                table: "Locations",
                newName: "speed");

            migrationBuilder.UpdateData(
                table: "APIKeys",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ValidTo" },
                values: new object[] { new DateTime(2020, 10, 10, 19, 24, 26, 831, DateTimeKind.Local).AddTicks(2709), new DateTime(2020, 10, 15, 19, 24, 26, 831, DateTimeKind.Local).AddTicks(3323) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 19, 24, 26, 828, DateTimeKind.Local).AddTicks(6984));

            migrationBuilder.UpdateData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                column: "CreatedDate",
                value: new DateTime(2020, 10, 10, 19, 24, 26, 830, DateTimeKind.Local).AddTicks(9103));
        }
    }
}

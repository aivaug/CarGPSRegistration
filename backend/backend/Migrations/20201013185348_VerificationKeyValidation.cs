using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class VerificationKeyValidation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "VerificationValid",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "APIKeys",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "ValidTo" },
                values: new object[] { new DateTime(2020, 10, 13, 21, 53, 47, 514, DateTimeKind.Local).AddTicks(9028), new DateTime(2020, 10, 18, 21, 53, 47, 515, DateTimeKind.Local).AddTicks(70) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "VerificationCode", "VerificationValid" },
                values: new object[] { new DateTime(2020, 10, 13, 21, 53, 47, 510, DateTimeKind.Local).AddTicks(2969), "00000000-0000-0000-0000-000000000000", true });

            migrationBuilder.UpdateData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                column: "CreatedDate",
                value: new DateTime(2020, 10, 13, 21, 53, 47, 514, DateTimeKind.Local).AddTicks(1606));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VerificationValid",
                table: "Users");

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
                columns: new[] { "CreatedDate", "VerificationCode" },
                values: new object[] { new DateTime(2020, 10, 11, 18, 27, 56, 171, DateTimeKind.Local).AddTicks(5590), null });

            migrationBuilder.UpdateData(
                table: "Vehicles",
                keyColumn: "Id",
                keyValue: new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                column: "CreatedDate",
                value: new DateTime(2020, 10, 11, 18, 27, 56, 175, DateTimeKind.Local).AddTicks(8106));
        }
    }
}

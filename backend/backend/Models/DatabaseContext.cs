using backend.Models.AccessControl;
using backend.Models.UsersEntities;
using backend.Models.VehiclesEntities;
using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    CreatedDate = DateTime.Now,
                    Email = "admin",
                    FirstName = "System",
                    LastName = "Admin",
                    Role = Role.Admin,
                    Password = "87F2C355168333EA33AB14F4442AC854C79736E9"
                }
            );

            modelBuilder.Entity<Vehicle>().HasData(
                new Vehicle
                {
                    Id = new Guid("f9717fb3-546a-4f88-9650-157d7775fd9e"),
                    Brand = "BMW",
                    Model = "e90",
                    YearManufactured = "2019"
                }
            );

            modelBuilder.Entity<APIKey>().HasData(
                new APIKey
                {
                    Id = 1,
                    Key = "123456789",
                    ValidTo = DateTime.Now.AddDays(5),
                }
            );
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<APIKey> APIKeys { get; set; }
        public DbSet<Location> Locations { get; set; }
    }
}

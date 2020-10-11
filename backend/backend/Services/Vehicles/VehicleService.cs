using backend.Models;
using backend.Models.VehiclesEntities;
using backend.Services.Vehicles;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.Vehicles
{
    public class VehicleService : IVehicleService
    {
        private DatabaseContext _context;

        public VehicleService(DatabaseContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<Vehicle> Create(Vehicle obj, int UserId)
        {
            Vehicle vehicle = new Vehicle()
            {
                Brand = obj.Brand,
                Model = obj.Model,
                YearManufactured = obj.YearManufactured,
                CreatedBy = _context.Users.FirstOrDefault(u => u.Id == UserId)
            };
            _context.Vehicles.Add(vehicle);
            await _context.SaveChangesAsync();
            return vehicle;
        }

        public async Task<Vehicle> Delete(Guid id)
        {
            Vehicle vehicle = _context.Vehicles.FirstOrDefault(x => x.Id == id);
            if(vehicle != null)
            {
                vehicle.IsDeleted = true;
                await _context.SaveChangesAsync();
                return vehicle;
            }
            return null;
        }

        public async Task<List<Vehicle>> GetAll()
        {
            return await _context.Vehicles.Where(x => !x.IsDeleted).ToListAsync();
        }

        public async Task<Vehicle> GetById(Guid id)
        {
            return await _context.Vehicles.FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == id);
        }

        public async Task<Vehicle> Update(Vehicle obj, Guid id)
        {
            Vehicle vehicle = _context.Vehicles.FirstOrDefault(x => x.Id == id);
            if(vehicle != null)
            {
                vehicle.Brand = obj.Brand;
                vehicle.Model = obj.Model;
                vehicle.YearManufactured = obj.YearManufactured;
                await _context.SaveChangesAsync();
                return vehicle;
            }
            return null;
        }
    }
}

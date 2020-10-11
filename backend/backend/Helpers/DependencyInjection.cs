using backend.Services.APIKeys;
using backend.Services.Authentication;
using backend.Services.Locations;
using backend.Services.Users;
using backend.Services.Vehicles;
using Microsoft.Extensions.DependencyInjection;

namespace backend.Helpers
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureDependencyInjections(this IServiceCollection services)
        {
            services.AddScoped<IVehicleService, VehicleService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IAPIKeyService, APIKeyService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ILocationService, LocationService>();

            return services;
        }
    }
}

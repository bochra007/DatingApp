using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API;
public static class ApplicationServiceExtentions
{
  
    public static IServiceCollection AddApplicationService(this IServiceCollection services , IConfiguration config){
        services.AddControllers();
        services.AddDbContext<DataContext>(opt => {
            opt.UseSqlite( config.GetConnectionString("DefaultConnection"));
        });
        services.AddCors();
        services.AddScoped<ITokenService , TokenServices>();
        services.AddScoped<IUserRepository, UserRepository>();

        return services;

    }
}
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace API.Extentions;

public static class IdentityServiceExtantion
{
    public static IServiceCollection AddIdentityServices( this IServiceCollection services, IConfiguration config){
             
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer( Options => {
        var tokenKey = config["TokenKey"] ?? throw new Exception("TokenKey not found ");
        Options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true ,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
            ValidateIssuer = false ,
            ValidateAudience = false,
        };

    }
    );


        return services; 
    }
}
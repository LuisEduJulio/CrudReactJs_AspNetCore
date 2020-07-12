using back.Context;
using back.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace back
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddDbContext<AppDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors(options =>
                {
                    options.AddPolicy("PermitirApiRequest",
                        builder =>
                        builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod()
                    );
                }
            );

            services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //adiciona o middleware para redirecionar para https
            app.UseHttpsRedirection();
            //adiciona o middleware de roteamento 
            app.UseRouting();
            //adiciona o middleware que autenticação
            app.UseAuthentication();
            //adiciona o middleware que habilita a autorizacao
            app.UseAuthorization();
            //adicionando cors
            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

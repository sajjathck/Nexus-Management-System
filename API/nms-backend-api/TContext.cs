using Microsoft.EntityFrameworkCore;
using nms_backend_api.Entity;
namespace nms_backend_api
{
    public class TContext:DbContext
    {
        public readonly IConfiguration Configuration;
        public TContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public DbSet<Teacher> teachers { get; set; }
        public DbSet<Class1> class1 { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("MyConnection"));
        }
    }
}

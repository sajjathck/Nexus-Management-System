using Microsoft.EntityFrameworkCore;

namespace nms_backend_api.Entity
{
    public class MyContext : DbContext
    {
            public readonly IConfiguration Configuration;
            public MyContext(IConfiguration configuration)
            {
                Configuration = configuration;
            }
            public DbSet<Teacher> teachers { get; set; }
            public DbSet<Student> students { get; set; }
            public DbSet<StudentAttendence> StudAttendences { get; set; }
            public DbSet<TeacherAttendence> TeachAttendences { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("MyConnection"));
            }
        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using WebApp1.Models;

namespace FirstWebApplication.Common
{
    public class MainDBC : DbContext
    {
        public MainDBC() : base("Data Source=DESKTOP-PN17VCD\\SQLEXPRESS;Initial Catalog=NewDB;Integrated Security=True")
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }        
        public DbSet<ProjectTask> ProjectTasko { get; set; }
        public DbSet<UserStory> userStories { get; set; }
        public DbSet<ManagerComent> managerComents { get; set; }
    }
}
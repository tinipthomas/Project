using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FirstWebApplication.Common;
using WebApp1.Models;

namespace WebApp1.Repos
{
    public class ProRepos
    {
        public static void CreateProj(Project project)
        {
            MainDBC db = new MainDBC();
            db.Projects.Add(project);
            db.SaveChanges();
        }
        public static void EditProj(Project Emp)
        {
            MainDBC db = new MainDBC();
            Project em = Pro_search_id(Emp);
            em.proid = Emp.proid;            
            em.proname = Emp.proname;
            em.clientname = Emp.clientname;
            em.startdate = Emp.startdate;
            em.enddate = Emp.enddate;
            db.SaveChanges();
        }
        
        public List<Project> GetAllProjects()
        {
            MainDBC db = new MainDBC();
            return db.Projects.Select(pro => pro).ToList();
        }
        public static Project Pro_search_id(Project id_search)
        {
            MainDBC db = new MainDBC();
            Project x = (db.Projects.Where(e => e.proid == e.proid)).First();
            return x;
        }
        public static void Operation_delete_id(int id_delete)
        {
            MainDBC db = new MainDBC();
            var qwer = db.Projects.FirstOrDefault(ep => ep.proid == id_delete);
            if (qwer != null)
            {
                db.Projects.Remove(qwer);
                db.SaveChanges();
            }
        }
    }
}
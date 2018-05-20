using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FirstWebApplication.Common;
using WebApp1.Models;

namespace WebApp1.Repos
{
    public class TaskRepos
    {
        public static void CreateTask(ProjectTask task)
        {
            MainDBC db = new MainDBC();
            db.ProjectTasko.Add(task);
            db.SaveChanges();
        }
        public static void EditTask(ProjectTask Emp)
        {
            MainDBC db = new MainDBC();
            ProjectTask em = Task_search_id(Emp);
            em.protaskid = Emp.protaskid;
            em.assignedto = Emp.assignedto;
            em.userstoryid = Emp.userstoryid;
            em.tstartdate = Emp.tstartdate;
            em.tenddate = Emp.tenddate;
            em.tcompletion = Emp.tcompletion;
            db.SaveChanges();
        }
        public static ProjectTask Task_search_id(ProjectTask id_search)
        {
            MainDBC db = new MainDBC();
            ProjectTask x = (db.ProjectTasko.Where(e => e.protaskid == e.protaskid)).First();
            return x;
        }
        public List<ProjectTask> GetAllTasks()
        {
            MainDBC db = new MainDBC();
            return db.ProjectTasko.Select(pt => pt).ToList();
        }

        public static void Operation_delete_id(int id_delete)
        {
            MainDBC db = new MainDBC();
            var qwer = db.ProjectTasko.FirstOrDefault(ep => ep.protaskid == id_delete);
            if (qwer != null)
            {
                db.ProjectTasko.Remove(qwer);
                db.SaveChanges();
            }
        }
    }
}
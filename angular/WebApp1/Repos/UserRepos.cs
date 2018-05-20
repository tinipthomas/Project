using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FirstWebApplication.Common;
using WebApp1.Models;

namespace WebApp1.Repos
{
    public class UserRepos
    {

        public static void Createuserstories(UserStory user)
        {
            MainDBC db = new MainDBC();
            db.userStories.Add(user);
            db.SaveChanges();
        }
        public static void EditUser(UserStory Emp)
        {
            MainDBC db = new MainDBC();
            UserStory em = User_search_id(Emp);
            em.userstoryid = Emp.userstoryid;
            em.story = Emp.story;
            em.proid = Emp.proid;
            db.SaveChanges();
        }
        public static UserStory User_search_id(UserStory id_search)
        {
            MainDBC db = new MainDBC();
            UserStory x = (db.userStories.Where(e => e.userstoryid == e.userstoryid)).First();
            return x;
        }
        public List<UserStory> GetAllUser()
        {
            MainDBC db = new MainDBC();
            return db.userStories.Select(us => us).ToList();
        }

        public static void Operation_delete_id(int id_delete)
        {
            MainDBC db = new MainDBC();
            var qwer = db.userStories.FirstOrDefault(ep => ep.proid == id_delete);
            if (qwer != null)
            {
                db.userStories.Remove(qwer);
                db.SaveChanges();
            }
        }
    }
}
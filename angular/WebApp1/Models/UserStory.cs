using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp1.Models
{
    public class UserStory
    {
        [Key]
        public int userstoryid { get; set; }
        public string story { get; set; }
        public int proid { get; set; }
    }
}
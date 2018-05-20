namespace WebApp1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class all : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        eid = c.Int(nullable: false, identity: true),
                        mgrid = c.Int(nullable: false),
                        contactno = c.Int(nullable: false),
                        name = c.String(nullable: false),
                        designation = c.String(nullable: false),
                        emailid = c.String(nullable: false),
                        skillsets = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.eid);
            
            CreateTable(
                "dbo.ManagerComents",
                c => new
                    {
                        mgrid = c.Int(nullable: false, identity: true),
                        comments = c.String(),
                        taskid = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.mgrid);
            
            CreateTable(
                "dbo.Projects",
                c => new
                    {
                        proid = c.Int(nullable: false, identity: true),
                        proname = c.String(),
                        clientname = c.String(),
                        startdate = c.DateTime(nullable: false),
                        enddate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.proid);
            
            CreateTable(
                "dbo.ProjectTasks",
                c => new
                    {
                        protaskid = c.Int(nullable: false, identity: true),
                        assignedto = c.Int(nullable: false),
                        userstoryid = c.Int(nullable: false),
                        tstartdate = c.DateTime(nullable: false),
                        tenddate = c.DateTime(nullable: false),
                        tcompletion = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.protaskid);
            
            CreateTable(
                "dbo.UserStories",
                c => new
                    {
                        userstoryid = c.Int(nullable: false, identity: true),
                        story = c.String(),
                        proid = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.userstoryid);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserStories");
            DropTable("dbo.ProjectTasks");
            DropTable("dbo.Projects");
            DropTable("dbo.ManagerComents");
            DropTable("dbo.Employees");
        }
    }
}

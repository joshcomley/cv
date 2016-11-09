import { Component, Pipe, Injectable, PipeTransform } from '@angular/core';
import { Experience, Skill, Testimonial, PortfolioItem, Social, ExperienceType, ExperienceReference } from "./shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  email: string;
  phone: string;
  whatsApp: string;
  portfolioSite: string;
  profile: string;
  current: string;
  experiences = new Array<Experience>();
  educations = new Array<Experience>();
  skills = new Array<Skill>();
  testimonials = new Array<Testimonial>();
  portfolioItems = new Array<PortfolioItem>();
  helps = new Array<string>();
  socials = new Array<Social>();

  constructor() {
    this.title = "Full stack developer and architect";
    this.name = "Josh Comley";
    this.email = "joshcomley@googlemail.com";
    this.phone = "+447979 857504";
    this.whatsApp = "+491781 413829";
    this.portfolioSite = "cv.joshcomley.com";

    this.profile = `<p>I am a C# technical architect from the UK with ten years’ experience in .NET and now living in Berlin.</p>
<p>Key skills include C#, ASP.NET, MVC, Unit Testing, CSS, XHTML, Javascript, AngularJS, jQuery, SQL, Xamarin and Azure.</p>
<p>I have spent the last year building up a suite of cross-platform portable image and audio technologies for use on desktop, mobile* and in the cloud due for launch later this year.</p>
<p>In addition I have developed a scalable Azure based ASP.NET and AngularJS web application with Web API backend and accompanying phone applications for mobile*.</p>
<p><i>* iOS, Android and Windows Phone</i></p>`;

    this.current = "I am free";

    this.experiences.push(
      new Experience(
        ExperienceType.SelfEmployed,
        "Self-employed (Brandless Limited)",
        "Developing a suite of portable technologies and applications for my own business.",
        "Berlin, Germany and Worcestershire, UK",
        "Developer and architect",
        "2014 - 2015",
        `<p>Work includes:</p>
        <ul>
<li>An MVC5/Angular JS based, HTML5 web application (in development but can demonstrate if needed)</li>
<li>Web API based backend for above web site using Entity Framework 6, Code First and SQL Server</li>
<li>Corresponding phone applications for Android, iPhone and Windows Phone</li>
<li>An entirely portable C#.NET based image manipulation library with support for Windows (including ASP.NET), Windows Phone, iOS, Android</li>
<li>Portable C#.NET based audio playback, recording, streaming, decoding and effects library for Windows, Windows Phone, iOS and Android</li>
<li>A C# to C# serializer (it’s more useful than it sounds!)</li>
</ul>`,
        ["AngularJS", "Code First", "MVC5", "Entity Framework 6", "BDD", "TDD", "SOLID", "REST", "Bootstrap", "Xamarin", " Mobile", "AngularJS", "C# 4.0", "ASP.NET", "SQL Server", "XHTML", "CSS", "JavaScript", "AJAX", "jQuery", "LINQ"]));

    this.experiences.push(
      new Experience(
        ExperienceType.Contract,
        "Sciensus Ltd.",
        "Developer and lead developer on software primarily used in hospitals to aid disease analysis.",
        "Brighton, UK",
        "Developer and architect",
        "May 2013 - October 2013",
        `<p>My work at Sciensus ranged from rapid creation of a fully customised call centre web application to ensure swift and accurate recall of faulty medical equipment, to a web based disease tracking system for Hepatitis.</p>
<p>Good UX, high security and data anonymity were all essential when building these applications as they were to be used in high pressure, security critical environments.</p>
<p>I introduced the team to a number of principles including DRY, agile and a collection of newer technologies such as Bootstrap.</p>`,
        ["Agile", "BDD", "TDD", "SOLID", "REST", "Team Training", "MVC 4/3", "Bootstrap", "C# 4.0", "ASP.NET", "Client Facing", "SQL Server", "XHTML", "CSS", "JavaScript", "AJAX", "jQuery", "LINQ"],
        new ExperienceReference("Kim Whaling", "+44 (0) 333 103 9780", "Sciensus, First floor office, Chelsea House, 8-14 The Broadway, Haywards Heath, RH16 3AH")));

    this.experiences.push(
      new Experience(
        ExperienceType.Permanent,
        "Freedman International Ltd. / Kaboodle",
        "Developer and lead developer on software primarily used in hospitals to aid disease analysis.",
        "London, UK",
        "Developer and architect",
        "Mar 2010 – April 2013 (became Kaboodle as of March 2011)",
        `<p><i>N.B: Freedman formed a start-up called Kaboodle for their new project. As such although I was at the same office I was technically in a different role and company as of March 2011</i></p>
<p>Lead developer and product architect a major in house product using C# 3.5/C# 4.0, WCF and MVC</p>
<p>Freedman is involved with helping multinational companies achieve their global marketing goals. As such, Freedman has undertook a challenge to build a web application to facilitate this, encouraging communication and visualising every aspect of the global marketing process. They envisage a product underpinning the company’s finances in the years to come.</p>
<p>My role was to work as technical lead for the team of 5 developers and architect on the project from start to finish. The front end to the application was built in MVC 4. This included managing and training team members in Ukraine.</p>
<p>The only decision beyond my control was the employment of SharePoint 2010 as a backend for the data, however all SharePoint access was abstracted away via an OData driven RESTful WCF service authenticated using OAuth – in other words we created a full, public (secured) REST API for the application. SharePoint is completely dynamic; the customer can change their experience very easily, adding columns to existing “tables”, even new “tables” of data and so on. The API had to reflect this live, delivering different data and metadata whilst the web application had to be robust enough to survive such changes in its underlying schema without requiring a reboot.</p>
<p>This particular project was one of the most challenging yet of my career due to an incredible number of hidden complexities and limitations within the underlying key technologies when dealing with completely dynamic data feeds. It has also given me excellent experience leading and managing a team of developers.</p>`,
        ["Agile", "BDD", "TDD", "SOLID", "REST", "Team Training", "OAuth", "OpenId", "MVC 4/3", "C# 4.0", "C# 3.5", " ASP.NET", "Client Facing", "SharePoint 2010", "Continuous Integration", "SQL Server", "XHTML", "CSS", "JavaScript", "AJAX", "jQuery", "WinForms", "WebForms", "Technical Writing", "LINQ"],
        new ExperienceReference("Dave Ashenhurst", "+447966582174", "India House, 45 Curlew Street, London SE1 2ND, United Kingdom")));

    this.experiences.push(
      new Experience(
        ExperienceType.Permanent,
        "Paxton Access Ltd.",
        "Built a variety of internal management web applications whilst maintaining existing website.",
        "London, UK",
        "Developer and architect",
        "June 2007 – Mar 2010",
        `<p>My work here has involved the lead development of over 50 web applications using ASP.NET and SQL Server, and over the last year ASP.NET MVC with jQuery.</p>
<p>Another key project includes the development of on an online system for controlling and reporting on remote security systems – opening doors, reporting on who is in a building etc.</p>
<p>Many examples of work can be given from time at this company; from web based complicated mathematical business projections and visualisations, complete task management tools and a custom blog to detailed sales history applications and an internal knowledge base. Work here is pushed out at a high standard and includes the design of all applications to very tight deadlines, through a mixture of agile and classic development structures. Once published, applications are often immediately used by up to 2500 people.</p>`,
        ["C# 3.5", "ASP.NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "AJAX", "jQuery", "MVC", "ASP", "ASP.NET", "WinForms", "WebForms", "Technical Writing", "Unit Testing", "Silverlight", "LINQ"],
        new ExperienceReference("Adam Stroud", "+441273 811011", "Paxton House, Home Farm Road, Brighton, BN1 9HU")));

    this.experiences.push(
      new Experience(
        ExperienceType.Contract,
        "Fit Systems Limited",
        "Built a holiday website with custom build CMS.",
        "Brighton, UK",
        "Developer and architect",
        "April 2008 – December 2008",
        `<p>Development and client facing role – helped design and entirely developed the holiday websites found at http://www.purezanzibar.com and http://www.puremozambique.com. Please note these websites have since been modified and do not represent my original work! These websites both run from a common code-base and more “themed” websites can be created from the comprehensive CMS at a later date.</p>`,
        ["C# 3.5", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "AJAX", "Client Facing", "WebForms", "LINQ"],
        new ExperienceReference("Ragnar Barnsby", "0845 603 79 26", "FITSystems Ltd, 16 Seville Street, Brighton, East Sussex, BN2 3AR")));

    this.experiences.push(
      new Experience(
        ExperienceType.Contract,
        "Riot Creative Limited",
        "Developed a pub/very-mini-social website and associated CMS (Content Management System)",
        "Brighton, UK",
        "Developer and architect",
        "April 2008 – December 2008",
        `<p>Although this is no longer live due to the client not paying Riot Creative Limited, it can still be found at the test site: http://themontague.stage.riotcreative.co.uk/</p>
<p>This project had a two week deadline to build a pub website with a slight social aspect along with an associated CMS to manage the various pages on the site. CMS can be demonstrated.</p>
<p>I also both helped design and entirely built the company website (http://www.riotcreative.co.uk). The site is XHTML 1.1 compliant and works 100% in all the major browsers (IE6, IE7, IE8, Chrome, Firefox 2, Firefox 3, Flock, Opera and Safari).</p>`,
        ["C# 3.5", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "AJAX", "Client Facing", "WebForms", "LINQ"],
        new ExperienceReference("Victoria Boarer", "+447789540894", "Riot Creative Limited, 40 Clarendon Villas, Hove. BN3 3RA")));

    this.experiences.push(
      new Experience(
        ExperienceType.Permanent,
        "Cubeworks Limited",
        "Build database driven web applications in ASP.NET using C# and SQL Server",
        "Brighton, UK",
        "Developer and architect",
        "March 2006 - June 2007",
        `<p>Working in an agile manner with project managers, later on as a team leader. The core of my work here has been ASP.NET web development with SQL Server, although included development of a few win forms C#.NET applications. Work was also heavily client facing, being involved in all aspects from pitching work to clients to negotiating through projects.</p>`,
        ["C# 3.5", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "AJAX", "Client Facing", "WebForms", "LINQ"],
        new ExperienceReference("Alex Cowell", "+441273 733373", "Cubeworks Ltd., 18 Marine Parade, Brighton. BN2 1TL")));

    this.experiences.push(
      new Experience(
        ExperienceType.Contract,
        "Tracalert Limited",
        "Build a customer management system in ASP.NET and SQL Server for call centre",
        "Brighton, UK",
        "Developer and architect",
        "July 2006 – October 2006",
        `<p>Designing and building a database driven customer management system with various tiers of user authorization and user impersonation for administrators. Highlights include addition of an ASP.NET text-to-voice service.</p>`,
        ["C#", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "ASP.NET", "WebForms"],
        new ExperienceReference("John Thurgood", "+447767 678678", "Tracalert Ltd., 15 London Street, Chertsey, Surrey. KT16 8AP")));

    this.experiences.push(
      new Experience(
        ExperienceType.Permanent,
        "Dealogic",
        "Design and build tools to help maintain finance customers' accounts",
        "London, UK",
        "Junior Developer",
        "June 2005 - March 2006",
        `<p>Work here involved building complex multi-threaded GUI tools to help maintain national and international banks' accounts with Dealogic in a mix of WinForms and ASP.NET applications, using .NET remoting.</p>`,
        ["C#", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "C++", "ASP.NET", "WinForms", "WebForms"],
        new ExperienceReference("Simon Hutton", "+4420 7379 5650", "Dealogic Ltd., 231-232 Strand, London. WC2R 1DA")));

    this.experiences.push(
      new Experience(
        ExperienceType.Permanent,
        "East Sussex County Council",
        "Provide technical support and assistance for all council staff",
        "Lewes, UK",
        "Junior Developer",
        "June 2003 - August 2003",
        `<p>Provided first (and some second) line technical support in a team of four for the entire employee population of East Sussex County Council for any IT (hardware and software) related problems. Trained on call logging system.</p>`,
        ["C#", ".NET", "SQL Server", "HTML", "XHTML", "CSS", "JavaScript", "C++", "ASP.NET", "WinForms", "WebForms"],
        new ExperienceReference("Linda Caola", "+441273 481234 ", "East Sussex County Council, Lewes")));

    this.educations.push(
      new Experience(
        ExperienceType.Education,
        "Sussex University",
        "",
        "Brighton, UK",
        "Computer Science and AI",
        "2002 - 2005",
        `<h2>Focus</h2>
<p>Java, C++, Haskell, Matlab</p>
<h2>Dissertation</h2>
<p>An embedded C application to control media computers via Bluetooth on Symbian based smart phones.</p>`));

    this.skills.push(new Skill("C#", 98, "Expert", "11", "I am good"));
    this.skills.push(new Skill("PHP", 10));

    this.helps.push("Front-end development with AngularJS");

    this.socials.push(new Social("", "fa fa-linkedin"));
    this.socials.push(new Social("", "fa fa-twitter"));
    this.socials.push(new Social("", "fa fa-google-plus"));
    this.socials.push(new Social("", "fa fa-github-alt"));
    this.socials.push(new Social("", "fa fa-skype"));
  }

  isLocalhost(): boolean {
    return window.location.href.indexOf("http://localhost:4200/") !== -1;
  }

  phoneNumber(number): string {
    return "tel: " + number.split(" ").join("");
  }
}
@Pipe({
  name: 'importantSkills',
  pure: false
})
@Injectable()
export class ImportantSkillsPipe implements PipeTransform {
  transform(items: Skill[], args: boolean): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => args ? item.description : !item.description);
  }
}
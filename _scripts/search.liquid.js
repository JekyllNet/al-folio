// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [
  
    
  
  {
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },
  
  
    
      
        
          
            {
              
               
              id: "dropdown-",
              title: "",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },
          
        

      
        {
          
           
          id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "";
          },
        },
      
    
  
  
    
      {
        
        id: "post-",
        
          title: "",
        
          title: ' <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "";
          
            window.open("", "_blank");
          
        },
      },
    
  
  
    
      
        {
          
            
          
            
          
          id: "-",
          title: '',
          description: "",
          section: "",
          
            handler: () => {
              window.location.href = "";
            },
          
        },
      
    
  
  
    
      
        
          
          
          "https://dl.acm.org/profile//"
        
          
          
          "https://arxiv.org/a/.html"
        
          
          
          ""
        
          
          
          ""
        
          
          
          ""
        
          
          
          ""
        
          
          
          "https://discord.com/users/"
        
          
          
          "mailto:"
        
          
          
          "https://facebook.com/"
        
          
          
          "https://www.flickr.com/"
        
          
          
          "https://github.com/"
        
          
          
          "https://gitlab.com/"
        
          
          
          "https://cv.hal.science/"
        
          
          
          "https://ieeexplore.ieee.org/author//"
        
          
          
          "https://inspirehep.net/authors/"
        
          
          
          "https://instagram.com/"
        
          
          
          "https://www.kaggle.com/"
        
          
          
          "https://keybase.io/"
        
          
          
          "https://www.last.fm/user/"
        
          
          
          "https://lattes.cnpq.br/"
        
          
          
          "https://leetcode.com/u//"
        
          
          
          "https://www.linkedin.com/in/"
        
          
          
          "https://"
        
          
          
          "https://medium.com/@"
        
          
          
          "https://orcid.org/"
        
          
          
          "https://osf.io//"
        
          
          
          "https://www.pinterest.com/"
        
          
          
          "https://publons.com/a//"
        
          
          
          "https://www.quora.com/profile/"
        
          
          
          "https://www.researchgate.net/profile//"
        
          
          
          "/al-folio/feed.xml"
        
          
          
          "https://scholar.google.com/citations?user="
        
          
          
          "https://www.scopus.com/authid/detail.uri?authorId="
        
          
          
          "https://www.semanticscholar.org/author/"
        
          
          
          "https://open.spotify.com/user/"
        
          
          
          "https://stackoverflow.com/users/"
        
          
          
          "https://www.strava.com/athletes/"
        
          
          
          "https://telegram.me/"
        
          
          
          "https://unsplash.com/@"
        
        // check how to add wechat qr code
        
          
          
          "https://wechat.com/"
        
        
          
          
          "https://wa.me/"
        
          
          
          "https://www.wikidata.org/wiki/"
        
          
          
          "https://wikipedia.org/wiki/User:"
        
          
          
          ""
        
          
          
          "https://twitter.com/"
        
          
          
          "https://youtube.com/@"
        
          
          
          "https://www.zotero.org/"
        
          
          
          ""
      
      {
        id: '',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open(, "_blank");
        },
      },
    
  
  
    {
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },
  
];

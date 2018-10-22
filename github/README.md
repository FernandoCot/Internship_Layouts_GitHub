
  Project Created for Super Cash Internship

    Started at: 09-10-18
    Finished at: 09-22-18


  Available Routes:

    "/" = HomePage
    "/users/{user}" = UserPage (Overview Section)
    "/users/{user}/repo" = UserPage (Repositories Section)
    "/users/{user}/followers" = UserPage (Followers Section)
    "/users/{user}/following" = UserPage (Following Section)


  Unavailable Routes:

    "/users/{user}/stars" = UserPage (Stars Section)



  PS¹: The "Unavailable Routes" are basically pages and/or components that I started but I didn't went far, so I decided not to commit them.

  PS²: There's no route "/users/", I've just set the param "user" as non-optional, so the only route that doesn't require it, is the homepage one.

  PS³: I didn't have enough time to bring up some State Management Lib (such as Mobx or Redux), so I used only the Fetch in the whole project.



---
title: "Behind the Plugin: Meet the Student Contributors"
authors: [Anne]
category: Community
featured: false
image: 2024-09-11-cover@4x.png
description: "Find out the process of building the plugin and reflection from the students."

---

The open-source world is a place for everyone. It thrives on diversity and that's why we believe that there's always a place for you. Whether you're a seasoned developer or just getting started, your contributions-code, documentations, or shining ideas-are valuable.

To make it easier for beginners, we've listed our projects on platforms like [ovio](https://ovio.org/project/apache/incubator-answer), [LibHunt](https://www.libhunt.com/r/incubator-answer), and [SourceForge](https://sourceforge.net/projects/incubator-answer/) for easier discovery. We're glad to have received a plugin contribution from [Melody](https://github.com/IamMelody233) and her classmate from Xiamen University Malaysia Campus. It's their first open-source contribution, and let's hear about the process and their reflection.

## Tell us more about the plugin.

We've built a [code highlighting plugin](https://github.com/apache/incubator-answer-plugins/tree/main/render-markdown-codehighlight) using React and highlight.js. The plugin offers real-time syntax highlighting for a wide range of programming languages and supports dynamic theme switching. Users can choose from popular themes like GitHub Light and GitHub Dark, or create their own custom themes.

## How did you break down the development of this plugin?

There are several phases as below. First, we started with a simple implementation of code highlighting in the project itself. Once this was working, we moved forward to transforming it into a single plugin.

Since plugins mostly deal with the front-end stuff, we focused on that first. After we got the basic highlighting running, we added customization which allows users to choose their preferred theme from the backend. To make that happen, we set up an interface between the front-end and back-end.

To sum up:
1. Import highlight.js and implement basic code highlighting on the front-end.
2. Migrate the code highlighting feature into a plugin. Well, Vite's bundling got in the way of importing all the CSS we needed, so we had to use CSS-in-JS instead.
3. We noticed that switching to the light theme and the preview box under Question weren't working smoothly. So, we tweaked some dependencies and added more responsive listeners to fix it
4. Once the front-end was stable, we turned our attention to the backend. We created a form for users to select their preferred themes.
5. By modifying the frontend-backend interface, we were able to dynamically apply the selected themes.
6. When testing, we identified performance issues related to CSS loading. To optimize performance, we switched to a dynamic import and mapping approach to reduce CSS load times.
7.  Finally, for better maintainability and readability, we wrote code to parse the core library and automate theme detection, classification, and switching."

## How do you solve the problems encoutered in the process?

Yes, there were a few challenges during development. For instance:

-   **CSS Loading:** Importing multiple CSS stylesheets was a problem because of Vite's packaging limitations. We overcame this by adopting a CSS-in-JS solution.
-   **Theme Switching:** The preview box below the Question wasn't in real-time rendering when switching between light and dark modes. To resolve this, we optimized dependencies and implemented more robust event listeners.
-   **Backend Integration:** Integrating the backend form with the frontend was another hurdle. We solved this by leveraging the Answer API to facilitate data exchange between the front-end and back-end.
-   **Code Maintenance:** To streamline future maintenance, we implemented file traversal to read the core library instead of manual imports.

By addressing these issues, we were able to enhance the plugin's performance and gain a deeper understanding of the underlying technologies.

## What new insights have we gained about the open-source community?

Working on open-source projects has taught us the importance of community and collaboration. Every little thing you do, like writing code or sharing ideas, helps make Answer better. It's not just about knowing how to code; you also need to be good at talking to other people. When you work together, you can make sure everything works right, especially when fixing problems.

We've learned that having great coding skills isn't enough. You need to really understand how the project works inside and out. That means learning from others and using their ideas. Open source isn't just about sharing tech; it's about sharing ideas and being creative. It helps everyone get better and makes us want to do our best

## How would you encourage students to participate in open source projects?

Working on these projects has helped us truly understand how open source works and the importance of teamwork. We think students should definitely get involved in open source projects. It's a great way to learn and practice coding.

By contributing, students can get real-world experience, solve real problems, and meet other people in tech. Start small and work your way up. Whether you write code, document things, or test stuff, there's a place for everyone. Open source can help you learn new things and add testimonials for your skills on your resume.

These two students didn't just write code; they went the extra mile! They created guides to help others set things up and contributed blog posts about how to configure the [frontend](https://answer.apache.org/blog/2024/08/16/apache-answer-frontend-configuration-guide) and [backend](https://answer.apache.org/blog/2024/08/20/apache-answer-backend-configuration-guide), as well as [add new plugins](https://answer.apache.org/blog/2024/08/22/guide-to-add-answer-plugins). Plus, they updated and translated the docs to make them easier to understand for Chinese speakers.

We're so grateful for their hard work! We hope more students will join us in making open source a welcoming place. There are lots of ways to get involved, even if you're not a coder. Click [here](https://answer.apache.org/community/contributing) to check it out and give it a try.

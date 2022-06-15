package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> infoAboutMe = new ArrayList<String>();
    infoAboutMe.add("Error - ASH ISLAND");
    infoAboutMe.add("Darling - Sik-K ");
    infoAboutMe.add("Crooked - G-DRAGON");
    infoAboutMe.add("Protect u - Skinny Brown");
    infoAboutMe.add("Counting Stars - BE\'O");
    infoAboutMe.add("Fallin - D.Ark");
    infoAboutMe.add("Let\'s Not Fall in Love - Big Bang");
    infoAboutMe.add("Home is Far Away - Epik High");
    infoAboutMe.add("whoa (mind in awe) - XXXTENTACION");

    Gson gson = new Gson();
    String json = gson.toJson(infoAboutMe);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}



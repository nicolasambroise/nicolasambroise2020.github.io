---
layout: post
title: "Drupal REST services"
date:   2019-03-09 15:16:07 +0100
categories: drupal
thumbnail: "java.jpg"
visible : false
---



Configuration du module Services de Drupal :




Modules installés :

Contrib/Services
Contrib/REST
Custom/Atoz_WS
Création d’un utilisateur

User : ws
Password : ************




Fonctionnement de AjaxDrupal et de ViewDrupalResult

private String DrupalRequest(String type, URL url, String token, String cookie, String data){

       String DrupalWsResult = "";

       try {

             HttpURLConnection connection = (HttpURLConnection) url.openConnection();

             connection.setDoOutput(true);

             if(!data.isEmpty() && !data.equals("")){connection.setDoInput(true);}

             connection.setRequestMethod(type);

             connection.setRequestProperty("Content-Type", "application/json");

             if(!token.isEmpty() && !token.equals("")){

connection.setRequestProperty("X-CSRF-Token", token);}

             if(!cookie.isEmpty() && !cookie.equals("")){

connection.setRequestProperty("Cookie", cookie);}

             if(type.equals("POST")){

connection.setRequestProperty("Content-Length","0");}

             if(!data.isEmpty() && !data.equals("")){

                    OutputStream os = connection.getOutputStream();

                    BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(os, "UTF-8"));

                    writer.write(data);

                    writer.flush();

                    writer.close();

                    os.close();}

             int code = connection.getResponseCode();

             if(code == 200){

                    BufferedReader br = new BufferedReader(new InputStreamReader((connection.getInputStream())));

                    String output;

                    while ((output = br.readLine()) != null) {DrupalWsResult += output;}

             }

             else{

                    System.err.println(code+" "+url);

                    DrupalWsResult += code+" "+url;

             }

             connection.disconnect();

       }

       catch (MalformedURLException e) {e.printStackTrace();}

       catch (IOException e) { e.printStackTrace();}

       return DrupalWsResult;

}



Description

Drupal Request attend 5 paramètres :

String type : généralement POST ou GET
URL url : l’url du webservice
String token : Si on a besoin d’un token pour un webservice nécessitant une connexion
String cookie : Si on a besoin des variables de session pour un webservice nécessitant une connexion. Il est constitué de « session_name », du signe égal et du « sessid »
String data : Si on a besoin d’envoyer des données au webservice


Remarque : Si il manque le token ou le cookies pour accéder à un webservice, cela renvoie vers l’erreur 403 - Erreur de droit (X-CSRF)

Les informations de connexion seront envoyée dans le paramètre « data » au format JSON

String connect = "{\"username\":\""+DrupalLogin+"\",\"password\":\""+DrupalPassword+"\"}";





Liste des Webservices



Mode  get_token (utilisé juste pour des tests)

http://www.atoz.lu/atoz/services/session/token è renvoi un token
DrupalRequest("GET",url,"","","");
Mode get_all_content (utilisé juste pour des tests)

http://www.atoz.lu/atoz/ws/node.json è Liste des nodes
DrupalRequest("GET",url,"","","");
Mode get_content (utilisé juste pour des tests)

Paramètre « nid » correspondant à l’id du node désiré
http://www.atoz.lu/atoz/ws/node/1.json è Détails du premier article
DrupalRequest("GET",url,"","","");
Mode get_all_blog_article  (utilisé juste pour des tests)

Paramètres « nitems » pour le nombre d’article, et « since » pour la période
http://www.atoz.lu/atoz/ws/blog/retrieve.json è Liste des articles de blog
http://www.atoz.lu/atoz/ws/blog/retrieve.json?nitems=5 è Liste des 5 derniers articles de blog
http://www.atoz.lu/atoz/ws/blog/retrieve.json?since=10 èListe des articles de blog publiés ces 10 derniers jours
http://www.atoz.lu/atoz/ws/blog/retrieve.json?nitems=5&since=10 èListe des articles de blog publiés ces 10 derniers jours dans la limite de 5 articles.


DrupalRequest("GET",url,"","","");
Mode get_all_webform

Paramètres « nitems » pour le nombre d’article, et « since » pour la période
http://www.atoz.lu/atoz/ws/webform/retrieve.json è Liste des articles de blog
http://www.atoz.lu/atoz/ws/webform/retrieve.json?nitems=5 è Liste des 5 derniers webform
http://www.atoz.lu/atoz/ws/webform/retrieve.json?since=10 èListe des webforms publiés ces 10 derniers jours
http://www.atoz.lu/atoz/ws/webform/retrieve.json?nitems=5&since=10 èListe des webforms publiés ces 10 derniers jours dans la limite de 5 articles.
DrupalRequest("GET",url,"","","");




Mode post_user_login

http://www.atoz.lu/atoz/ws/user/login.json è Connexion de l’utilisateur à la platform
jsonResult = DrupalRequest("GET",url,"","",connect);
Mode post_user_token (non utilisé)

http://www.atoz.lu/atoz/ws/user/token.json è Recupération du token d’un l’utilisateur
jsonResult = DrupalRequest("GET",url,"","",connect);
Mode post_user_connect

http://www.atoz.lu/atoz/ws/system/connect.json è Récupération des données de l’utilisateur connecté
jsonResult = DrupalRequest("POST",url,token,session_name+"="+sessid,"");
Mode get_users (non utilisé)

http://www.atoz.lu/atoz/ws/user.json è Liste des utilisateurs
jsonResult = DrupalRequest("GET",url,token,session_name+"="+sessid,"");
Mode get_user (non utilisé)

Paramètre « uid » correspondant à l’id du user désiré
http://www.atoz.lu/atoz/ws/user/1.json è Détails sur l’user 1
jsonResult = DrupalRequest("GET",url,token,session_name+"="+sessid,"");
Mode get_webform_results

Paramètre « nid » correspondant à l’id du webform désiré
http://www.atoz.lu/atoz/ws/webformsub/retrieve/3.json è Liste des résultats au formulaire 3
jsonResult = DrupalRequest("GET",url,token,session_name+"="+sessid,"");
Mode get_webform_manual_results

Paramètre « nid » correspondant à l’id du webform désiré
http://www.atoz.lu/atoz/ws/manualsub/retrieve/3.json è Liste des résultats manuel (decline) du formulaire 3
jsonResult = DrupalRequest("GET",url,token,session_name+"="+sessid,"");
Il est possible de créer d’autres Webservices pour Insert ou Update des résultats webform, cela ce passe dans le fichier : /sites/all/modules/custom/Atoz_WS/Atoz_WS.module

Ordre d’appel :

post_user_login
get_webform_results
get_webform_manual_results

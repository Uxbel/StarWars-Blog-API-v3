"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, People, Planet, FavoritesPeople, FavoritesPlanet
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/people', methods=['GET']) #Funciona
def get_people():

    people = People.query.all() # trae todo los registros de la tabla people
    people_serialize = list(map(lambda x:x.serialize(),people)) # Devuelve un diccionario por cada personaje (serialize del models)
    
    return jsonify(people_serialize), 200

@api.route('/people/<int:id>', methods=['GET']) # Funciona (Revisar los siguientes)
def get_people_by_id(id):

    people = People.query.filter_by(id=id).first() # trae un registro según el id
    
    return jsonify(people.serialize()), 200

@api.route('/planets', methods=['GET']) #Funciona
def get_planets():

    planets = Planet.query.all() # trae todo los registros de la tabla planet
    planets_serialize = list(map(lambda x:x.serialize(),planets)) # Devuelve un diccionario por cada planeta (serialize del models)
    
    return jsonify(planets_serialize), 200

@api.route('/planet/<int:id>', methods=['GET']) # funciona
def get_planet_by_id(id):

    planet = Planet.query.filter_by(id=id).first() # trae un registro según el id
    
    return jsonify(planet.serialize()), 200


@api.route('/users/<int:id>/favorites', methods=['GET']) # Revisar
def get_favorites_by_user(id):
    favorites = []

    favoritesPeople = FavoritesPeople.query.filter_by(id=id) # trae todo los favoritos de un usuario según su id
    favoritesPlanet = FavoritesPlanet.query.filter_by(id=id) # trae todo los favoritos de un usuario según su id
    for people in favoritesPeople: 
        favorites.append(people.id)
    for planet in favoritesPlanet: 
        favorites.append(planet.id)
    
    #favorites_serialize = list(map(lambda x:x.serialize(),favorites)) # Devuelve un diccionario por cada favorito (serialize del models)
    
    return jsonify(favorites), 200

@api.route('/favorite/<int:user_id>/planet/<int:planet_id>', methods=['POST']) # funciona
def post_planet_favorite(user_id,planet_id):

    planet_favorite = FavoritesPlanet(planet_id=planet_id,user_id=user_id) # Relaciona un usario con un planeta para almacenarlo en favoritos
    db.session.add(planet_favorite)
    db.session.commit()
    return jsonify({"Body_response":"Planeta agregado con éxito"}), 200

@api.route('/favorite/<int:user_id>/people/<int:people_id>', methods=['POST']) # funciona
def post_people_favorite(user_id,people_id):

    people_favorite = FavoritesPeople(people_id=people_id, user_id=user_id) # Relaciona un usario con un planeta para almacenarlo en favoritos
    db.session.add(people_favorite)
    db.session.commit()
    return jsonify({"Body_response":"Personaje agregado con éxito"}), 200


@api.route('/favorite/<int:user_id>/planet/<int:planet_id>', methods=['DELETE']) #funciona
def delete_planet_favorites_by_user(user_id,planet_id):

    delete_planet_favorites = FavoritesPlanet.query.filter_by(user_id=user_id, planet_id=planet_id).first() # elimina el favorito planeta según el id del usuario
    db.session.delete(delete_planet_favorites)
    db.session.commit()
    
    return jsonify(delete_planet_favorites.serialize()), 200

@api.route('/favorite/<int:user_id>/people/<int:people_id>', methods=['DELETE']) 
def delete_people_favorites_by_user(user_id,people_id):

    delete_people_favorites = FavoritesPeople.query.filter_by(user_id=user_id, people_id=people_id).first() # elimina el favorito personaje según el id del usuario
    db.session.delete(delete_people_favorites)
    db.session.commit()

    return jsonify(delete_people_favorites.serialize()), 200
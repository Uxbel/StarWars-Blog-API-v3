from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user
            # do not serialize the password, its a security breach
        }
                              

class People(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    height = db.Column(db.String(50))
    mass = db.Column(db.String(50))
    hair_color = db.Column(db.String(50))
    skin_color = db.Column(db.String(50))
    eye_color = db.Column(db.String(50))
    birth_year = db.Column(db.String(50))
    gender = db.Column(db.String(50))
    name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String)      

    def __repr__(self):
        return '<People %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "height": self.height,
            "mass": self.mass,
            "hair_color": self.hair_color,
            "skin_color": self.skin_color,
            "eye_color": self.eye_color,
            "birth_year": self.birth_year,
            "gender": self.gender,
            "name": self.name,
            "img_url": self.img_url
            # do not serialize the password, its a security breach
        }

    def save(self):
        db.session.add(self)   
        db.session.commit()
    

class Planet(db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    diameter = db.Column(db.String(50))
    rotation_period = db.Column(db.String(50))
    orbital_period = db.Column(db.String(50))
    gravity = db.Column(db.String(50))
    population = db.Column(db.String(50))
    climate = db.Column(db.String(50))
    terrain = db.Column(db.String(50))
    surface_water = db.Column(db.String(50))
    name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String)

    def __repr__(self):
        return '<Planet %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "diameter": self.diameter,
            "rotation_period": self.rotation_period,
            "orbital_period": self.orbital_period,
            "gravity": self.gravity,
            "population": self.population,
            "climate": self.climate,
            "terrain": self.terrain,
            "surface_water": self.surface_water,
            "name": self.name,
            "img_url": self.img_url
            # do not serialize the password, its a security breach
        }

    def save(self):
        db.session.add(self)   
        db.session.commit()


class FavoritesPlanet(db.Model):
    
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), primary_key=True)

    user = db.relationship("User")

    planet_id = db.Column(db.Integer(), db.ForeignKey('planet.id'), primary_key=True)

    planet = db.relationship("Planet")

    def __repr__(self):
        return '<FavoritesPlanet %r>' % self.user_id

    def serialize(self):
        return {
            "user_id": self.user_id,
            "planet_id": self.planet_id
            # do not serialize the password, its a security breach
        }

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class FavoritesPeople(db.Model):
    
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), primary_key=True)

    user = db.relationship("User")

    people_id = db.Column(db.Integer(), db.ForeignKey('people.id'), primary_key=True)

    people = db.relationship("People")

    def __repr__(self):
        return '<FavoritesPeople %r>' % self.user_id

    def serialize(self):
        return {
            "user_id": self.user_id,
            "people_id": self.people_id
            # do not serialize the password, its a security breach
        }

    def delete(self):
        db.session.delete(self)
        db.session.commit()
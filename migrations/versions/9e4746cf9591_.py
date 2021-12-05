"""empty message

Revision ID: 9e4746cf9591
Revises: 2807edd385a2
Create Date: 2021-12-05 10:24:40.761334

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e4746cf9591'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('people',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('height', sa.String(length=50), nullable=True),
    sa.Column('mass', sa.String(length=50), nullable=True),
    sa.Column('hair_color', sa.String(length=50), nullable=True),
    sa.Column('skin_color', sa.String(length=50), nullable=True),
    sa.Column('eye_color', sa.String(length=50), nullable=True),
    sa.Column('birth_year', sa.String(length=50), nullable=True),
    sa.Column('gender', sa.String(length=50), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('planet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('diameter', sa.String(length=50), nullable=True),
    sa.Column('rotation_period', sa.String(length=50), nullable=True),
    sa.Column('orbital_period', sa.String(length=50), nullable=True),
    sa.Column('gravity', sa.String(length=50), nullable=True),
    sa.Column('population', sa.String(length=50), nullable=True),
    sa.Column('climate', sa.String(length=50), nullable=True),
    sa.Column('terrain', sa.String(length=50), nullable=True),
    sa.Column('surface_water', sa.String(length=50), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('people_id', sa.Integer(), nullable=True),
    sa.Column('planet_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['people_id'], ['people.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['planet_id'], ['planet.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('user', sa.Column('username', sa.String(length=100), nullable=False))
    op.drop_constraint('user_email_key', 'user', type_='unique')
    op.create_unique_constraint(None, 'user', ['username'])
    op.drop_column('user', 'is_active')
    op.drop_column('user', 'email')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'user', type_='unique')
    op.create_unique_constraint('user_email_key', 'user', ['email'])
    op.drop_column('user', 'username')
    op.drop_table('favorites')
    op.drop_table('planet')
    op.drop_table('people')
    # ### end Alembic commands ###

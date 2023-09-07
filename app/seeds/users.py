from app.models import db, User, environment, SCHEMA
from app.models.habits import Habit
from app.models.dailies import Daily
from app.models.to_dos import ToDo
from app.models.equipment import EquipmentItem
from app.models.user_equipment import UserEquipment
from app.models.achievements import Achievement
from app.models.user_achievements import UserAchievement
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        bio='just your average everyday adventurer',
        experience_points=80,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=500
        )
    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        bio='ready to crush my goals',
        experience_points=75,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=0
        )
    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        bio='goal-crushing quest master',
        experience_points=50,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=0
        )
    user1 = User(
        username='User1',
        email='user1@example.com',
        bio='A coding enthusiast',
        experience_points=50,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user1password',
        gold=0
        )
    user2 = User(
        username='User2',
        email='user2@example.com',
        bio='Loves hiking and photography',
        experience_points=100,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user2password',
        gold=0
        )
    user3 = User(
        username='User3',
        email='user3@example.com',
        bio='Foodie and travel lover',
        experience_points=75,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user3password',
        gold=0
        )
    user4 = User(
        username='User4',
        email='user4@example.com',
        bio='Gamer and streamer',
        experience_points=200,
        level=4,
        date_joined=datetime(2023, 9, 6),
        password='user4password',
        gold=0
        )
    user5 = User(
        username='User5',
        email='user5@example.com',
        bio='Bookworm and writer',
        experience_points=30,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='user5password',
        gold=0
        )
    user6 = User(
        username='User6',
        email='user6@example.com',
        bio='Fitness enthusiast',
        experience_points=150,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user6password',
        gold=0
        )
    user7 = User(
        username='User7',
        email='user7@example.com',
        bio='Musician and composer',
        experience_points=80,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user7password',
        gold=0
        )
    user8 = User(
        username='User8',
        email='user8@example.com',
        bio='Art lover and painter',
        experience_points=110,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user8password',
        gold=0
        )
    user9 = User(
        username='User9',
        email='user9@example.com',
        bio='Tech geek and gadget collector',
        experience_points=250,
        level=5,
        date_joined=datetime(2023, 9, 6),
        password='user9password',
        gold=0
        )
    user10 = User(
        username='User10',
        email='user10@example.com',
        bio='Environmental activist',
        experience_points=95,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user10password',
        gold=0
        )
    user11 = User(
        username='User11',
        email='user11@example.com',
        bio='Animal lover and volunteer',
        experience_points=40,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='user11password',
        gold=0
        )
    user12 = User(
        username='User12',
        email='user12@example.com',
        bio='Fashionista and designer',
        experience_points=180,
        level=4,
        date_joined=datetime(2023, 9, 6),
        password='user12password',
        gold=0
        )

    db.session.add_all([demo, marnie, bobbie, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12])

    habit1 = Habit(
        user_id=1,
        title='Morning Routine',
        notes='my morning routine habit',
        type='positive',
        difficulty='easy',
        tags='Health + Wellness')

    habit2 = Habit(
        user_id=1,
        title='Sleep & Evening Routine',
        notes='My sleep & evening routine habit',
        type='positive',
        difficulty='medium',
        tags='Health + Wellness')

    habit3 = Habit(
        user_id=1,
        title='Quit Smoking',
        notes='My habit for quitting smoking',
        type='negative',
        difficulty='hard',
        tags='Health + Wellness')

    habit4 = Habit(
        user_id=1,
        title='Study',
        notes='My studying habit',
        type='positive',
        difficulty='medium',
        tags='School')

    habit5 = Habit(
        user_id=1,
        title='Creative Writing',
        notes='My creative writing habit',
        type='positive',
        difficulty='easy',
        tags='Creativity')

    habit6 = Habit(
        user_id=1,
        title='Tidying & Organization',
        notes='My tidying and organization habit',
        type='positive',
        difficulty='medium',
        tags='Chores')

    habit7 = Habit(
        user_id=1,
        title='Soccer Practice',
        notes='My soccer practice habit',
        type='positive',
        difficulty='medium',
        tags='Exercise, Teams')

    habit8 = Habit(
        user_id=1,
        title='Lateness',
        notes='My habit for no longer showing up late',
        type='negative',
        difficulty='medium',
        tags='Work, School')

    habit9 = Habit(
        user_id=1,
        title='Productivity',
        notes='My productivity habit',
        type='positive',
        difficulty='hard',
        tags='Work, School, Chores')

    habit10 = Habit(
        user_id=1,
        title='Gratitude',
        notes='My gratitude habit',
        type='positive',
        difficulty='easy',
        tags='Health + Wellness')

    habit11 = Habit(
        user_id=1,
        title='Meditation',
        notes='My meditation habit',
        type='positive',
        difficulty='easy',
        tags='Health + Wellness')

    habit12 = Habit(
        user_id=1,
        title='Meal Prep',
        notes='My meal prep habit',
        type='positive',
        difficulty='medium',
        tags='Health + Wellness')

    db.session.add_all([habit1, habit2, habit3, habit4, habit5, habit6, habit7, habit8, habit9, habit10, habit11, habit12])

    daily1 = Daily(
        user_id=1,
        title='Feed the dog',
        notes='Give Loki and Freyja food before work',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='all',
        tags='Chores'
    )

    daily2 = Daily(
        user_id=1,
        title='Do the dishes',
        notes='Dont let them sit there forever, no matter how tempting that seems.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='all',
        tags='Chores'
    )

    daily3 = Daily(
        user_id=1,
        title='Go to the gym',
        notes='Even if its just to stare at everyone awkwardly and quickly retreat.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='friday',
        tags='Exercise, Health + Wellness'
    )

    daily4 = Daily(
        user_id=1,
        title='Spend 15 minutes tidying',
        notes='Repeat in each room',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='wednesday',
        tags='Chores'
    )

    daily5 = Daily(
        user_id=1,
        title='Attend board meeting',
        notes='Board meetings are oh so boring.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='thursday',
        tags='Teams, Work'
    )

    daily6 = Daily(
        user_id=1,
        title='Do homework',
        notes='Just do it.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='all',
        tags='School'
    )

    daily7 = Daily(
        user_id=1,
        title='Write weekly article',
        notes='AND edit it.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='wednesday',
        tags='Creativity, Work'
    )

    daily8 = Daily(
        user_id=1,
        title='Bathe dogs',
        notes='They are perpetually stinky.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='thursday',
        tags='Chores'
    )

    daily9 = Daily(
        user_id=1,
        title='Grocery Shopping',
        notes='Because food is life.',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='tuesday',
        tags='Chores'
    )

    daily10 = Daily(
        user_id=1,
        title='Get allergy shots',
        notes='at Dr.Smiths office',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='wednesday',
        tags='Health + Wellness'
    )

    daily11 = Daily(
        user_id=1,
        title='Lunch with Bestie',
        notes='At Taco Bell',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='thursday',
        tags='Teams'
    )

    daily12 = Daily(
        user_id=1,
        title='Check the mail',
        notes='Why are there always bills inside but never surprise checks?',
        start_date=datetime(2023, 9, 6),
        num_weeks=1,
        day_of_week='all',
        tags='Chores'
    )

    db.session.add_all([daily1, daily2, daily3, daily4, daily5, daily6, daily7, daily8, daily9, daily10, daily11, daily12])

    todo1 = ToDo(
        user_id=1,
        title='Make Dentist Appointment',
        notes='No matter how weird your dentist is.',
        difficulty='easy',
        due_date=datetime(2023, 9, 10),
        tags='Health + Wellness'
    )

    todo2 = ToDo(
        user_id=1,
        title='Pick up dinner',
        notes='From Taco Bell. Duh.',
        difficulty='easy',
        due_date=datetime(2023, 9, 10),
        tags='Chores'
    )

    todo3 = ToDo(
        user_id=1,
        title='Work on Project',
        notes='Code, code, code.',
        difficulty='medium',
        due_date=datetime(2023, 9, 10),
        tags='Work, School'
    )

    todo4 = ToDo(
        user_id=1,
        title='Drum Lessons',
        notes='With Adam Gilbert of Starset',
        difficulty='medium',
        due_date=datetime(2023, 9, 10),
        tags='Creativity'
    )

    todo5 = ToDo(
        user_id=1,
        title='Department Meeting',
        notes='Lets get this bread.',
        difficulty='hard',
        due_date=datetime(2023, 9, 10),
        tags='Work, Teams'
    )

    todo6 = ToDo(
        user_id=1,
        title='50 Push-Ups',
        notes='JUST DO IT.',
        difficulty='hard',
        due_date=datetime(2023, 9, 10),
        tags='Exercise'
    )

    todo7 = ToDo(
        user_id=1,
        title='Nightly Report',
        notes='Dont want to get a strike',
        difficulty='easy',
        due_date=datetime(2023, 9, 10),
        tags='School'
    )

    todo8 = ToDo(
        user_id=1,
        title='Take Loki to the Vet',
        notes='For his routine checkup.',
        difficulty='medium',
        due_date=datetime(2023, 9, 10),
        tags='Chores, Health + Wellness'
    )

    todo9 = ToDo(
        user_id=1,
        title="Clip Freyja's nails",
        notes='If you dare.',
        difficulty='hard',
        due_date=datetime(2023, 9, 10),
        tags='Chores'
    )

    todo10 = ToDo(
        user_id=1,
        title="Fold Laundry",
        notes='Before a molehill becomes a mountain.',
        difficulty='easy',
        due_date=datetime(2023, 9, 10),
        tags='Chores'
    )

    db.session.add_all([todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9, todo10])

    ach1 = Achievement(
        name='Streak Achievements',
        description='Has performed this many 21-day streaks on Dailies',
        points=20
    )

    ach2 = Achievement(
        name="Perfect Days",
        description="Completed all active Dailies on for the specified number of days. This achievement gives you a +level/2 buff to all Stats for the next day. Levels greater than 100 don't have any additional effects on buffs.",
        points=50
    )

    ach3 = Achievement(
        name="Party Up",
        description="Joined a Party with another person! Have fun battling monsters and supporting each other.",
        points=40
    )

    ach4 = Achievement(
        name="Party On",
        description="Joined a Party with at least four people! Enjoy your increased accountability as you unite with your friends to vanquish your foes!",
        points=40
    )

    ach5 = Achievement(
        name="Royally Loyal",
        description="This user has checked in over 500 times!",
        points=100
    )

    ach6 = Achievement(
        name="Create your first Habit",
        description="Created their first Habit.",
        points=25
    )

    ach7 = Achievement(
        name="Create your first Daily",
        description="Created their first Daily.",
        points=25
    )

    ach8 = Achievement(
        name="Create your first To-Do",
        description="Created their first To-Do.",
        points=25
    )

    ach9 = Achievement(
        name="Complete a task",
        description="Completed their first task.",
        points=25
    )

    ach10 = Achievement(
        name="Purchase a piece of equipment",
        description="Purchased a piece of equipment.",
        points=25
    )

    ach11 = Achievement(
        name="QuestForge Naming Day",
        description="Celebrated this many Naming Days! Thanks for being a fantastic user!",
        points=35
    )

    ach12 = Achievement(
        name="QuestForge Birthday Bash",
        description="Celebrated this many QuestForge Birthday Bashes!",
        points=35
    )

    ach13 = Achievement(
        name="Annoying Friends",
        description="Got snowballed by party members.",
        points=50
    )

    ach14 = Achievement(
        name="Alarming Friends",
        description="Got spooked by party members.",
        points=50
    )

    ach15 = Achievement(
        name="Agricultural Friends",
        description="Got transformed into a flower by party members.",
        points=50
    )

    ach16 = Achievement(
        name="Helped QuestForge Grow",
        description="Helped QuestForge grow, either by filling out a survey or helping with a major testing effort. Thank you!",
        points=200
    )

    ach17 = Achievement(
        name="Contributor",
        description="Has contributed to QuestForge, whether via art, music, writing, or other methods.",
        points=1000
    )

    db.session.add_all([ach1, ach2, ach3, ach4, ach5, ach6, ach7, ach8, ach9, ach10, ach11, ach12, ach13, ach14, ach15, ach16, ach17])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.habits RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.dailies RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.to_dos RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.equipment RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.user_equipment RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.achievements RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.user_achievements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM habits"))
        db.session.execute(text("DELETE FROM dailies"))
        db.session.execute(text("DELETE FROM to_dos"))
        db.session.execute(text("DELETE FROM equipment"))
        db.session.execute(text("DELETE FROM user_equipment"))
        db.session.execute(text("DELETE FROM achievements"))
        db.session.execute(text("DELETE FROM user_achievements"))

    db.session.commit()

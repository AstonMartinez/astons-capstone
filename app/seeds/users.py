from app.models import db, User, environment, SCHEMA
from app.models.habits import Habit
from app.models.dailies import Daily
from app.models.to_dos import ToDo
from app.models.equipment import EquipmentItem
from app.models.user_equipment import UserEquipment
from app.models.achievements import Achievement
from app.models.user_achievements import UserAchievement
from app.models.reward import Reward
from app.models.avatar import Avatar
from app.models.user_rewards import UserReward
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        bio='just your average everyday adventurer',
        experience_points=5,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=500,
        health=50
        )
    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        bio='ready to crush my goals',
        experience_points=75,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=0,
        health=100
        )
    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        bio='goal-crushing quest master',
        experience_points=50,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='password',
        gold=0,
        health=100
        )
    user1 = User(
        username='User1',
        email='user1@example.com',
        bio='A coding enthusiast',
        experience_points=50,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user1password',
        gold=0,
        health=100
        )
    user2 = User(
        username='User2',
        email='user2@example.com',
        bio='Loves hiking and photography',
        experience_points=100,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user2password',
        gold=0,
        health=100
        )
    user3 = User(
        username='User3',
        email='user3@example.com',
        bio='Foodie and travel lover',
        experience_points=75,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user3password',
        gold=0,
        health=100
        )
    user4 = User(
        username='User4',
        email='user4@example.com',
        bio='Gamer and streamer',
        experience_points=200,
        level=4,
        date_joined=datetime(2023, 9, 6),
        password='user4password',
        gold=0,
        health=100
        )
    user5 = User(
        username='User5',
        email='user5@example.com',
        bio='Bookworm and writer',
        experience_points=30,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='user5password',
        gold=0,
        health=100
        )
    user6 = User(
        username='User6',
        email='user6@example.com',
        bio='Fitness enthusiast',
        experience_points=150,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user6password',
        gold=0,
        health=100
        )
    user7 = User(
        username='User7',
        email='user7@example.com',
        bio='Musician and composer',
        experience_points=80,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user7password',
        gold=0,
        health=100
        )
    user8 = User(
        username='User8',
        email='user8@example.com',
        bio='Art lover and painter',
        experience_points=110,
        level=3,
        date_joined=datetime(2023, 9, 6),
        password='user8password',
        gold=0,
        health=100
        )
    user9 = User(
        username='User9',
        email='user9@example.com',
        bio='Tech geek and gadget collector',
        experience_points=250,
        level=5,
        date_joined=datetime(2023, 9, 6),
        password='user9password',
        gold=0,
        health=100
        )
    user10 = User(
        username='User10',
        email='user10@example.com',
        bio='Environmental activist',
        experience_points=95,
        level=2,
        date_joined=datetime(2023, 9, 6),
        password='user10password',
        gold=0,
        health=100
        )
    user11 = User(
        username='User11',
        email='user11@example.com',
        bio='Animal lover and volunteer',
        experience_points=40,
        level=1,
        date_joined=datetime(2023, 9, 6),
        password='user11password',
        gold=0,
        health=100
        )
    user12 = User(
        username='User12',
        email='user12@example.com',
        bio='Fashionista and designer',
        experience_points=180,
        level=4,
        date_joined=datetime(2023, 9, 6),
        password='user12password',
        gold=0,
        health=100
        )

    db.session.add_all([demo, marnie, bobbie, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12])

    avatar1 = Avatar(
        user_id=1,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar2 = Avatar(
        user_id=2,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar3 = Avatar(
        user_id=3,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar4 = Avatar(
        user_id=4,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar5 = Avatar(
        user_id=5,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar6 = Avatar(
        user_id=6,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar7 = Avatar(
        user_id=7,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar8 = Avatar(
        user_id=8,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar9 = Avatar(
        user_id=9,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar10 = Avatar(
        user_id=10,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar11 = Avatar(
        user_id=11,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    avatar12 = Avatar(
        user_id=12,
        shirt="https://i.ibb.co/z8tJWZV/slim-shirt-black.png",
        hair="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        bangs="https://i.ibb.co/Qrby7Vm/hair-bangs-1-black.png",
        skin="https://i.ibb.co/KN3nLzw/skin-98461a.png",
        background="violet"
    )

    db.session.add_all([avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12])

    habit1 = Habit(
        user_id=1,
        title='Morning Routine',
        notes='my morning routine habit',
        type='positive',
        difficulty='Easy',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    habit2 = Habit(
        user_id=1,
        title='Sleep & Evening Routine',
        notes='My sleep & evening routine habit',
        type='positive',
        difficulty='Medium',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    habit3 = Habit(
        user_id=1,
        title='Quit Smoking',
        notes='My habit for quitting smoking',
        type='negative',
        difficulty='Hard',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    habit4 = Habit(
        user_id=1,
        title='Study',
        notes='My studying habit',
        type='positive',
        pos_count=0,
        neg_count=0,
        status="regular",
        difficulty='Medium',
        tags='School')

    habit5 = Habit(
        user_id=1,
        title='Creative Writing',
        notes='My creative writing habit',
        type='positive',
        difficulty='Easy',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Creativity')

    habit6 = Habit(
        user_id=1,
        title='Tidying & Organization',
        notes='My tidying and organization habit',
        type='positive',
        difficulty='Medium',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Chores')

    habit7 = Habit(
        user_id=1,
        title='Soccer Practice',
        notes='My soccer practice habit',
        type='positive',
        difficulty='Medium',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Exercise, Teams')

    habit8 = Habit(
        user_id=1,
        title='Lateness',
        notes='My habit for no longer showing up late',
        type='negative',
        difficulty='Medium',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Work, School')

    habit9 = Habit(
        user_id=1,
        title='Productivity',
        notes='My productivity habit',
        type='positive',
        difficulty='Hard',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Work, School, Chores')

    habit10 = Habit(
        user_id=1,
        title='Gratitude',
        notes='My gratitude habit',
        type='positive',
        difficulty='Easy',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    habit11 = Habit(
        user_id=1,
        title='Meditation',
        notes='My meditation habit',
        type='positive',
        difficulty='Easy',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    habit12 = Habit(
        user_id=1,
        title='Meal Prep',
        notes='My meal prep habit',
        type='positive',
        difficulty='Medium',
        pos_count=0,
        neg_count=0,
        status="regular",
        tags='Health + Wellness')

    db.session.add_all([habit1, habit2, habit3, habit4, habit5, habit6, habit7, habit8, habit9, habit10, habit11, habit12])

    daily1 = Daily(
        user_id=1,
        title='Feed the dog',
        notes='Give Loki and Freyja food before work',
        checklist="one, two, three, four, five",
        difficulty='Trivial',
        start_date=datetime(2023, 9, 6),
        repeats="daily",
        num_repeats=1,
        day_of_repeat='all',
        tags='Chores',
        count=0,
        status='due'
    )

    daily2 = Daily(
        user_id=1,
        title='Do the dishes',
        notes='Dont let them sit there forever, no matter how tempting that seems.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="daily",
        num_repeats=1,
        day_of_repeat='all',
        tags='Chores',
        count=0,
        status='due'
    )

    daily3 = Daily(
        user_id=1,
        title='Go to the gym',
        notes='Even if its just to stare at everyone awkwardly and quickly retreat.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Thursday',
        tags='Exercise, Health + Wellness',
        count=0,
        status='due'
    )

    daily4 = Daily(
        user_id=1,
        title='Spend 15 minutes tidying',
        notes='Repeat in each room',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="daily",
        num_repeats=1,
        day_of_repeat='all',
        tags='Chores',
        count=0,
        status='due'
    )

    daily5 = Daily(
        user_id=1,
        title='Attend board meeting',
        notes='Board meetings are oh so boring.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Wednesday',
        tags='Teams, Work',
        count=0,
        status='due'
    )

    daily6 = Daily(
        user_id=1,
        title='Do homework',
        notes='Just do it.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="daily",
        num_repeats=1,
        day_of_repeat='Friday',
        tags='School',
        count=0,
        status='due'
    )

    daily7 = Daily(
        user_id=1,
        title='Write weekly article',
        notes='AND edit it.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Friday',
        tags='Creativity, Work',
        count=0,
        status='due'
    )

    daily8 = Daily(
        user_id=1,
        title='Bathe dogs',
        notes='They are perpetually stinky.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Tuesday',
        tags='Chores',
        count=0,
        status='due'
    )

    daily9 = Daily(
        user_id=1,
        title='Grocery Shopping',
        notes='Because food is life.',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Monday',
        tags='Chores',
        count=0,
        status='due'
    )

    daily10 = Daily(
        user_id=1,
        title='Get allergy shots',
        notes='at Dr.Smiths office',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="weekly",
        num_repeats=1,
        day_of_repeat='Tuesday',
        tags='Health + Wellness',
        count=0,
        status='due'
    )

    daily11 = Daily(
        user_id=1,
        title='Lunch with Bestie',
        notes='At Taco Bell',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="monthly",
        num_repeats=1,
        day_of_repeat='Wednesday',
        tags='Teams',
        count=0,
        status='due'
    )

    daily12 = Daily(
        user_id=1,
        title='Check the mail',
        notes='Why are there always bills inside but never surprise checks?',
        checklist="one, two, three, four, five",
        difficulty='Easy',
        start_date=datetime(2023, 9, 6),
        repeats="daily",
        num_repeats=1,
        day_of_repeat='Thursday',
        tags='Chores',
        count=0,
        status='due'
    )

    db.session.add_all([daily1, daily2, daily3, daily4, daily5, daily6, daily7, daily8, daily9, daily10, daily11, daily12])

    todo1 = ToDo(
        user_id=1,
        title='Make Dentist Appointment',
        notes='No matter how weird your dentist is.',
        difficulty='Easy',
        due_date=datetime(2023, 9, 10),
        tags='Health + Wellness',
        checklist='',
        status="incomplete"
    )

    todo2 = ToDo(
        user_id=1,
        title='Pick up dinner',
        notes='From Taco Bell. Duh.',
        difficulty='Easy',
        due_date=datetime(2023, 9, 10),
        tags='Chores',
        checklist='',
        status="incomplete"
    )

    todo3 = ToDo(
        user_id=1,
        title='Work on Project',
        notes='Code, code, code.',
        difficulty='Medium',
        due_date=datetime(2023, 9, 10),
        tags='Work, School',
        checklist='',
        status="incomplete"
    )

    todo4 = ToDo(
        user_id=1,
        title='Drum Lessons',
        notes='With Adam Gilbert of Starset',
        difficulty='Medium',
        due_date=datetime(2023, 9, 10),
        tags='Creativity',
        checklist='',
        status="incomplete"
    )

    todo5 = ToDo(
        user_id=1,
        title='Department Meeting',
        notes='Lets get this bread.',
        difficulty='Hard',
        due_date=datetime(2023, 9, 10),
        tags='Work, Teams',
        checklist='',
        status="incomplete"
    )

    todo6 = ToDo(
        user_id=1,
        title='50 Push-Ups',
        notes='JUST DO IT.',
        difficulty='Hard',
        due_date=datetime(2023, 9, 10),
        tags='Exercise',
        checklist='',
        status="incomplete"
    )

    todo7 = ToDo(
        user_id=1,
        title='Nightly Report',
        notes='Dont want to get a strike',
        difficulty='Easy',
        due_date=datetime(2023, 9, 10),
        tags='School',
        checklist='',
        status="incomplete"
    )

    todo8 = ToDo(
        user_id=1,
        title='Take Loki to the Vet',
        notes='For his routine checkup.',
        difficulty='Medium',
        due_date=datetime(2023, 9, 10),
        tags='Chores, Health + Wellness',
        checklist='',
        status="incomplete"
    )

    todo9 = ToDo(
        user_id=1,
        title="Clip Freyja's nails",
        notes='If you dare.',
        difficulty='Hard',
        due_date=datetime(2023, 9, 10),
        tags='Chores',
        checklist='',
        status="incomplete"
    )

    todo10 = ToDo(
        user_id=1,
        title="Fold Laundry",
        notes='Before a molehill becomes a mountain.',
        difficulty='Easy',
        due_date=datetime(2023, 9, 10),
        tags='Chores',
        checklist='',
        status="incomplete"
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

    reward1 = Reward(
        title="Reward yourself",
        user_id=1,
        notes="Watch TV, play a game, eat a treat, it's up to you!",
        cost=10,
        tags=""
    )

    reward2 = Reward(
        user_id=1,
        title="Play Starfield",
        notes="You deserve it",
        cost=10,
        tags=""
    )

    reward3 = Reward(
        user_id=1,
        title="Eat Taco Bell",
        notes="Don't go broke on it.",
        cost=10,
        tags=""
    )

    db.session.add_all([reward1, reward2, reward3])

    equip1 = EquipmentItem(
        name="Training Sword",
        description="Practice item. Confers no benefit.",
        strength=0,
        str_gear_num=0,
        str_class_bonus=0,
        constitution=0,
        const_gear_num=0,
        const_class_bonus=0,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=1,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_weapon_warrior_0.png"
    )

    equip2 = EquipmentItem(
        name="Leather Armor",
        description="Jerkin of sturdy boiled hide. Increases Constitution by 3.",
        strength=0,
        str_gear_num=0,
        str_class_bonus=0,
        constitution=4,
        const_gear_num=3,
        const_class_bonus=1,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=30,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_armor_warrior_1.png"
    )

    equip3 = EquipmentItem(
        name="Wooden Shield",
        description="Round shield of thick wood. Increases Constitution by 2.",
        strength=0,
        str_gear_num=0,
        str_class_bonus=0,
        constitution=3,
        const_gear_num=2,
        const_class_bonus=1,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=20,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_shield_warrior_1.png"
    )

    equip4 = EquipmentItem(
        name="Leather Helm",
        description="Cap of sturdy boiled hide. Increases Strength by 2.",
        strength=3,
        str_gear_num=2,
        str_class_bonus=1,
        constitution=0,
        const_gear_num=0,
        const_class_bonus=0,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=15,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_head_warrior_1.png"
        )

    equip5 = EquipmentItem(
        name="Health Potion",
        description="Recover 15 health. (Instant Use)",
        strength=0,
        str_gear_num=0,
        str_class_bonus=0,
        constitution=0,
        const_gear_num=0,
        const_class_bonus=0,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=25,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_potion.png"
        )

    equip6 = EquipmentItem(
        name="Enchanted Armoire",
        description="Open the armoire to randomly receive special Equipment, Experience, or Food!",
        strength=0,
        str_gear_num=0,
        str_class_bonus=0,
        constitution=0,
        const_gear_num=0,
        const_class_bonus=0,
        intelligence=0,
        int_gear_num=0,
        int_class_bonus=0,
        perception=0,
        perc_gear_num=0,
        perc_class_bonus=0,
        cost=100,
        image="https://habitica-assets.s3.amazonaws.com/mobileApp/images/shop_armoire.png"
        )

    db.session.add_all([equip1, equip2, equip3, equip4, equip5, equip6])

    user_equip1 = UserEquipment(
        user_id = 1,
        equipment_id = 1
    )

    user_equip2 = UserEquipment(
        user_id = 1,
        equipment_id = 2
    )

    user_equip3 = UserEquipment(
        user_id = 1,
        equipment_id = 3
    )

    user_equip4 = UserEquipment(
        user_id = 1,
        equipment_id = 4
    )

    db.session.add_all([user_equip1, user_equip2, user_equip3, user_equip4])

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
        db.session.execute(f"TRUNCATE table {SCHEMA}.avatars RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.habits RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.dailies RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.to_dos RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.equipment RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_equipment RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.achievements RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_achievements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM avatars"))
        db.session.execute(text("DELETE FROM habits"))
        db.session.execute(text("DELETE FROM dailies"))
        db.session.execute(text("DELETE FROM to_dos"))
        db.session.execute(text("DELETE FROM equipment"))
        db.session.execute(text("DELETE FROM user_equipment"))
        db.session.execute(text("DELETE FROM achievements"))
        db.session.execute(text("DELETE FROM user_achievements"))

    db.session.commit()

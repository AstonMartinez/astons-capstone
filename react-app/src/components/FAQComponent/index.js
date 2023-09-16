import './FAQComponent.css'
import { useState } from 'react'


const FAQComponent = () => {
    const [qOneActive, setQOneActive] = useState("inactive")
    const [qTwoActive, setQTwoActive] = useState("inactive")
    const [qThreeActive, setQThreeActive] = useState("inactive")
    const [qFourActive, setQFourActive] = useState("inactive")
    const [qFiveActive, setQFiveActive] = useState("inactive")

    return (
        <div id='faq-parent-container'>
            <div id='faq-header-container'>
                <h1 id='faq-header-text'>Frequently Asked Questions</h1>
            </div>
            <div id='parent-all-questions-container'>
                <div className='individual-question'>
                    <div onClick={() => {
                        setQOneActive("active")
                        setQTwoActive("inactive")
                        setQThreeActive("inactive")
                        setQFourActive("inactive")
                        setQFiveActive("inactive")
                        }}>
                        <p className='question-p-tag'>I'm confused. Where do I get an overview?</p>
                    </div>
                    <div className={`question-answer-container-${qOneActive}`}>
                        <p>First, you'll set up tasks that you want to do in your everyday life. Then, as you complete the tasks in real life and check them off, you'll earn Experience and Gold.</p>
                        <p>Gold is used to buy equipment and some items, as well as custom rewards. Experience causes your character to level up and unlock content such as pets, skills, and quests!</p>
                    </div>
                </div>
                <div className='individual-question'>
                    <div onClick={() => {
                        setQOneActive("inactive")
                        setQTwoActive("active")
                        setQThreeActive("inactive")
                        setQFourActive("inactive")
                        setQFiveActive("inactive")
                    }}>
                        <p className='question-p-tag'>How do I set up my tasks?</p>
                    </div>
                    <div className={`question-answer-container-${qTwoActive}`}>
                        <ul id='question-two-list'>
                            <li>Good Habits (the ones with a colored plus sign) are tasks that you can do many times a day, such as eating vegetables. Bad Habits (the ones with a colored minus sign) are tasks that you should avoid, like biting nails. Habits with a colored plus sign and a colored minus sign have a good choice and a bad choice, like taking the stairs vs. taking the elevator. Good Habits award Experience and Gold. Bad Habits subtract Health.</li>
                            <li>Dailies are tasks that you have to do every day, like brushing your teeth or checking your email. You can adjust the days that a Daily is due by clicking the pencil item to edit it. If you skip a Daily that is due, your avatar will take damage overnight. Be careful not to add too many Dailies at once!</li>
                            <li>To Do's are your To Do list. Completing a To Do earns you Gold and Experience. You never lose Health from To Do's. You can add a due date to a To Do by clicking the pencil icon to edit.</li>
                        </ul>
                    </div>
                </div>
                <div className='individual-question'>
                    <div onClick={() => {
                        setQOneActive("inactive")
                        setQTwoActive("inactive")
                        setQThreeActive("active")
                        setQFourActive("inactive")
                        setQFiveActive("inactive")
                    }}>
                        <p className='question-p-tag'>Why do my tasks change color?</p>
                    </div>
                    <div className={`question-answer-container-${qThreeActive}`}>
                        <p>Your tasks change color based on how well you are currently accomplishing them! Each new task starts out as a neutral yellow. Perform Dailies or positive Habits more frequently and they move toward blue.</p>
                        <p>Miss a Daily or give in to a bad Habit and the task moves toward red. The redder a task, the more rewards it will give you, but if it’s a Daily or bad Habit, the more it will hurt you! This helps motivate you to complete the tasks that are giving you trouble.</p>
                    </div>
                </div>
                <div className='individual-question'>
                    <div onClick={() => {
                        setQOneActive("inactive")
                        setQTwoActive("inactive")
                        setQThreeActive("inactive")
                        setQFourActive("active")
                        setQFiveActive("inactive")
                    }}>
                        <p className='question-p-tag'>Why did my avatar lose health, and how do I regain it?</p>
                    </div>
                    <div className={`question-answer-container-${qFourActive}`}>
                        <p>If you click a bad Habit, it will damage you. The main way to heal is to gain a level, which restores all your Health. You can also buy a Health Potion with Gold from the Shops.</p>
                    </div>
                </div>
                <div className='individual-question'>
                    <div onClick={() => {
                        setQOneActive("inactive")
                        setQTwoActive("inactive")
                        setQThreeActive("inactive")
                        setQFourActive("inactive")
                        setQFiveActive("active")
                    }}>
                        <p className='question-p-tag'>How do I report a bug or request a feature?</p>
                    </div>
                    <div className={`question-answer-container-${qFiveActive}`}>
                        <p>To report a bug, click on Report a Bug at the bottom of the page to send us an email. (You may need to set up handling for 'mailto' links in your browser.)</p>
                        <p>If you're unable to log in to QuestForge, send your login details (not your password!) to admin@questforge.com. Don't worry, we'll get you fixed up soon! Feature requests are collected via a quick form. Click Request a Feature at the bottom of the page and follow the instructions. Ta-da!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQComponent;

from playsound import playsound
import speech_recognition as sr 
from googletrans import Translator 
from gtts import gTTS 
import os
import webbrowser
import datetime
import random
import numpy as np
import pyttsx3
import sklearn
import pickle 
import time


my_dict ={0: 'itching',
 1: 'skin_rash',
 2: 'nodal_skin_eruptions',
 3: 'continuous_sneezing',
 4: 'shivering',
 5: 'chills',
 6: 'joint_pain',
 7: 'stomach_pain',
 8: 'acidity',
 9: 'ulcers_on_tongue',
 10: 'muscle_wasting',
 11: 'vomiting',
 12: 'burning_micturition',
 13: 'spotting_ urination',
 14: 'fatigue',
 15: 'weight_gain',
 16: 'anxiety',
 17: 'cold_hands_and_feets',
 18: 'mood_swings',
 19: 'weight_loss',
 20: 'restlessness',
 21: 'lethargy',
 22: 'patches_in_throat',
 23: 'irregular_sugar_level',
 24: 'cough',
 25: 'high_fever',
 26: 'sunken_eyes',
 27: 'breathlessness',
 28: 'sweating',
 29: 'dehydration',
 30: 'indigestion',
 31: 'headache',
 32: 'yellowish_skin',
 33: 'dark_urine',
 34: 'nausea',
 35: 'loss_of_appetite',
 36: 'pain_behind_the_eyes',
 37: 'back_pain',
 38: 'constipation',
 39: 'abdominal_pain',
 40: 'diarrhoea',
 41: 'mild_fever',
 42: 'yellow_urine',
 43: 'yellowing_of_eyes',
 44: 'acute_liver_failure',
 45: 'fluid_overload',
 46: 'swelling_of_stomach',
 47: 'swelled_lymph_nodes',
 48: 'malaise',
 49: 'blurred_and_distorted_vision',
 50: 'phlegm',
 51: 'throat_irritation',
 52: 'redness_of_eyes',
 53: 'sinus_pressure',
 54: 'runny_nose',
 55: 'congestion',
 56: 'chest_pain',
 57: 'weakness_in_limbs',
 58: 'fast_heart_rate',
 59: 'pain_during_bowel_movements',
 60: 'pain_in_anal_region',
 61: 'bloody_stool',
 62: 'irritation_in_anus',
 63: 'neck_pain',
 64: 'dizziness',
 65: 'cramps',
 66: 'bruising',
 67: 'obesity',
 68: 'swollen_legs',
 69: 'swollen_blood_vessels',
 70: 'puffy_face_and_eyes',
 71: 'enlarged_thyroid',
 72: 'brittle_nails',
 73: 'swollen_extremeties',
 74: 'excessive_hunger',
 75: 'extra_marital_contacts',
 76: 'drying_and_tingling_lips',
 77: 'slurred_speech',
 78: 'knee_pain',
 79: 'hip_joint_pain',
 80: 'muscle_weakness',
 81: 'stiff_neck',
 82: 'swelling_joints',
 83: 'movement_stiffness',
 84: 'spinning_movements',
 85: 'loss_of_balance',
 86: 'unsteadiness',
 87: 'weakness_of_one_body_side',
 88: 'loss_of_smell',
 89: 'bladder_discomfort',
 90: 'foul_smell_of urine',
 91: 'continuous_feel_of_urine',
 92: 'passage_of_gases',
 93: 'internal_itching',
 94: 'toxic_look_(typhos)',
 95: 'depression',
 96: 'irritability',
 97: 'muscle_pain',
 98: 'altered_sensorium',
 99: 'red_spots_over_body',
 100: 'belly_pain',
 101: 'abnormal_menstruation',
 102: 'dischromic _patches',
 103: 'watering_from_eyes',
 104: 'increased_appetite',
 105: 'polyuria',
 106: 'family_history',
 107: 'mucoid_sputum',
 108: 'rusty_sputum',
 109: 'lack_of_concentration',
 110: 'visual_disturbances',
 111: 'receiving_blood_transfusion',
 112: 'receiving_unsterile_injections',
 113: 'coma',
 114: 'stomach_bleeding',
 115: 'distention_of_abdomen',
 116: 'history_of_alcohol_consumption',
 117: 'fluid_overload.1',
 118: 'blood_in_sputum',
 119: 'prominent_veins_on_calf',
 120: 'palpitations',
 121: 'painful_walking',
 122: 'pus_filled_pimples',
 123: 'blackheads',
 124: 'scurring',
 125: 'skin_peeling',
 126: 'silver_like_dusting',
 127: 'small_dents_in_nails',
 128: 'inflammatory_nails',
 129: 'blister',
 130: 'red_sore_around_nose',
 131: 'yellow_crust_ooze'}

my_disease={0: 'Fungal infection',
 1: 'Allergy',
 2: 'GERD',
 3: 'Chronic cholestasis',
 4: 'Drug Reaction',
 5: 'Peptic ulcer diseae',
 6: 'AIDS',
 7: 'Diabetes ',
 8: 'Gastroenteritis',
 9: 'Bronchial Asthma',
 10: 'Hypertension ',
 11: 'Migraine',
 12: 'Cervical spondylosis',
 13: 'Paralysis (brain hemorrhage)',
 14: 'Jaundice',
 15: 'Malaria',
 16: 'Chicken pox',
 17: 'Dengue',
 18: 'Typhoid',
 19: 'hepatitis A',
 20: 'Hepatitis B',
 21: 'Hepatitis C',
 22: 'Hepatitis D',
 23: 'Hepatitis E',
 24: 'Alcoholic hepatitis',
 25: 'Tuberculosis',
 26: 'Common Cold',
 27: 'Pneumonia',
 28: 'Dimorphic hemmorhoids(piles)',
 29: 'Heart attack',
 30: 'Varicose veins',
 31: 'Hypothyroidism',
 32: 'Hyperthyroidism',
 33: 'Hypoglycemia',
 34: 'Osteoarthristis',
 35: 'Arthritis',
 36: '(vertigo) Paroymsal  Positional Vertigo',
 37: 'Acne',
 38: 'Urinary tract infection',
 39: 'Psoriasis',
 40: 'Impetigo'}
id = {
    'Aanya Patel': 5055,
    'Siddharth Kumar': 5055,
    'Neha Sharma': 5055,
    'Rajat Jain': 5055,
    'Tanisha Reddy': 5055,
    'Rohan Deshmukh': 5055,
    'Ishaan Malhotra': 5055,
    'Kritika Gupta': 5055,
    'Aarav Singh': 5055,
    'Yash Verma': 5055,
    'Ria Pandey': 5055,
    'Shreya Mehta': 5055,
    'Divya Soni': 5055,
    'Harshita Kumar': 5055,
    'Ayush Nair': 5055
}
doctor = {'Dermatologist': 'Aanya Patel',
    'Allergist/Immunologist': 'Siddharth Kumar',
    'Gastroenterologist': 'Neha Sharma',
    'Infectious Disease Specialist': 'Rajat Jain',
    'Endocrinologist': 'Tanisha Reddy',
    'Pulmonologist': 'Rohan Deshmukh',
    'Cardiologist': 'Ishaan Malhotra',
    'Neurologist': 'Kritika Gupta',
    'Orthopedic Surgeon': 'Aarav Singh',
    'Hepatologist': 'Yash Verma',
    'Colorectal Surgeon': 'Ria Pandey',
    'Vascular Surgeon': 'Shreya Mehta',
    'Rheumatologist': 'Divya Soni',
    'Urologist': 'Harshita Kumar',
    'Primary Care Physician': 'Ayush Nair'}
prognosis = {
    'Fungal infection': 'Dermatologist',
    'Allergy': 'Allergist/Immunologist',
    'GERD': 'Gastroenterologist',
    'Chronic cholestasis': 'Gastroenterologist',
    'Drug Reaction': 'Dermatologist',
    'Peptic ulcer disease': 'Gastroenterologist',
    'AIDS': 'Infectious Disease Specialist',
    'Diabetes': 'Endocrinologist',
    'Gastroenteritis': 'Gastroenterologist',
    'Bronchial Asthma': 'Pulmonologist',
    'Hypertension': 'Cardiologist',
    'Migraine': 'Neurologist',
    'Cervical spondylosis': 'Orthopedic Surgeon',
    'Paralysis (brain hemorrhage)': 'Neurologist',
    'Jaundice': 'Gastroenterologist',
    'Malaria': 'Infectious Disease Specialist',
    'Chicken pox': 'Infectious Disease Specialist',
    'Dengue': 'Infectious Disease Specialist',
    'Typhoid': 'Infectious Disease Specialist',
    'Hepatitis A': 'Infectious Disease Specialist',
    'Hepatitis B': 'Infectious Disease Specialist',
    'Hepatitis C': 'Infectious Disease Specialist',
    'Hepatitis D': 'Infectious Disease Specialist',
    'Hepatitis E': 'Infectious Disease Specialist',
    'Alcoholic hepatitis': 'Hepatologist',
    'Tuberculosis': 'Infectious Disease Specialist',
    'Common Cold': 'Primary Care Physician',
    'Pneumonia': 'Pulmonologist',
    'Dimorphic hemorrhoids (piles)': 'Colorectal Surgeon',
    'Heart attack': 'Cardiologist',
    'Varicose veins': 'Vascular Surgeon',
    'Hypothyroidism': 'Endocrinologist',
    'Hyperthyroidism': 'Endocrinologist',
    'Hypoglycemia': 'Endocrinologist',
    'Osteoarthritis': 'Rheumatologist',
    'Arthritis': 'Rheumatologist',
    '(Vertigo) Paroxysmal Positional Vertigo': 'Neurologist',
    'Acne': 'Dermatologist',
    'Urinary tract infection': 'Urologist',
    'Psoriasis': 'Dermatologist',
    'Impetigo': 'Dermatologist'
}
x=[0] * 132
xp=[]
new_val=[]
model = pickle.load(open('model.pkl','rb'))
lan='ml'
def say(query):
    # engine = pyttsx3.init()
    # engine.say(f"{text}")
    # engine.runAndWait()
    translator = Translator()
    text_to_translate = translator.translate(query, dest=lan)
    text = text_to_translate.text
    speak = gTTS(text=text, lang=lan, slow=False)
    speak.save("audio.mp3")
    # time.sleep(1) 
    playsound('audio.mp3')
    # os.close('audio.mp3')
    os.remove('audio.mp3')
    

def detectDisease(values):
    val_list = list(my_dict.values())
    for i in values:
        j=i.replace(" ","_").lower()
        if j in val_list:
            new_val.append(i)
            position = val_list.index(j)
            xp.append(position)
    say("You entered")
    for i in new_val:
        say(f'{i}')
    print(new_val)
    for i in xp:
        x[i]=1
    y = model.predict([x])
    print(y)
    print(my_disease[y[0]])
    say(f"You are suffering from {my_disease[y[0]]}")
    print(prognosis[my_disease[y[0]]])
    say(f"You need a {prognosis[my_disease[y[0]]]}")
    z = doctor[prognosis[my_disease[y[0]]]]
    print(z)
    say(f'Contacting Doctor {doctor[prognosis[my_disease[y[0]]]]}')
    print(id[z])


def takeCommand(lang):
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)
        r.pause_threshold =  0.6
        audio = r.listen(source)
        try:
            print("Recognizing...")
            query = r.recognize_google(audio, language=lang)
            translator = Translator()
            text_to_translate = translator.translate(query, dest='en')
            text = text_to_translate.text
            print(f"User said: {text}")
            return text
        except Exception as e:
            return "-1"

if __name__ == '__main__':
    print("Choose your language English or Malyalam")
    say('Choose your language English or Malyalam')
    query = takeCommand('ml-IN')
    lang = ''
    if "English".lower() in query.lower():
        lan = 'en'
        lang = 'en-IN'
    else :
        lan = 'ml'
        lang  = 'ml-IN'
    print('Welcome to Baymax')
    say("Welcome to Baymax")
    say("Enter your symptoms")
    values = []
    while True:
        print("Listening...")
        query = takeCommand(lang)
        if "Quit".lower() in query.lower():
            detectDisease(values)
            exit()
        if "Done".lower() in query.lower():
            detectDisease(values)
            print(values)
            exit()
        if query!="-1":
            values.append(query)
    
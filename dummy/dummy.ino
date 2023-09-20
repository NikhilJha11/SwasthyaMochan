#include <LiquidCrystal.h>
#include <SoftwareSerial.h>

LiquidCrystal lcd(12, 6, 5, 4, 3, 2); // LCD pins (RS, E, D4, D5, D6, D7)
SoftwareSerial gsm(10, 11); // GSM module pins (RX, TX)

String user_data = "Nikhil | Phone Number:+919175913123 | Age:20 | Address:Mumbai | Allergies:No | Blood Group:O+ve";
int pulseValue = 87; // Pulse rate value
int spoValue = 92; //spo2 value

bool helpSent = false; // Flag to track if help message has been sent
bool ambulanceAssistanceDisplayed = false; // Flag to track if ambulance assistance has been displayed

void setup() {
  lcd.begin(16, 2); // Initialize the LCD with 16 columns and 2 rows
  gsm.begin(9600);
  Serial.begin(9600);

  lcd.setCursor(2, 0);
  lcd.print("Fingerprint");
  lcd.setCursor(3, 1);
  lcd.print("Have a Scan");
  delay(5000);
  lcd.clear();
  lcd.print("Fingerprint");
  lcd.setCursor(1, 8);
  lcd.print("Matched");
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Hi Nikhil,");
  lcd.setCursor(0, 1);
  lcd.print("Please wait...");
  delay(5000);
  lcd.clear();

  // Display "Details:" without a blank space
  lcd.setCursor(0, 0);
  lcd.print("Details:");
  lcd.setCursor(0, 1);

  // Display user data in scrolling text
  int dataLength = user_data.length();
  for (int i = 0; i < dataLength + 16; i++) {
    lcd.scrollDisplayLeft();
    if (i < dataLength)
      lcd.print(user_data[i]);
    delay(300);
  }
  delay(5000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Medical");
  lcd.setCursor(0, 1);
  lcd.print("Assisted:");
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Blood Test");
  lcd.setCursor(0, 1);
  lcd.print("11/9/2023");
  delay(5000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Pulse / SpO2");
  delay(2000);
  lcd.setCursor(0, 1);
  lcd.print("Loading...");
  delay(10000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Pulse Value: ");
  lcd.print(pulseValue); // Display the pulse rate value
  lcd.setCursor(0, 1);
  lcd.print("Spo2: ");
  lcd.print(spoValue); // Display the spo2 rate value
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Please interact");
  lcd.setCursor(0, 1);
  lcd.print("with Ai");
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Doctor Parth");
  lcd.setCursor(0, 1);
  lcd.print("Recommended");
  delay(10000); // Wait 10 seconds

  // Display live video and ambulance assistance codes as scrolling text
  displayScrollingText("Live Video Code: 5055", "Ambulance Assistance: 9665110847");

  // Send "Help is on the way" message to both Harshul and Doctor Parth
  sendHelpMessageToBoth("+919175913123", "+919814056663");
}

void loop() {
  if (gsm.available()) {
    String response = gsm.readString();
    Serial.println(response);
    // You can add logic here to handle responses from the GSM module.

    // Check if a message is received from nikhil
    if (response.indexOf("+919175913123") != -1 && !helpSent) {
      // Send a message to nikhil that help is on the way
      sendHelpMessage("+919175913123"); // Send to nikhil
      sendHelpMessage("+919814056663"); // Send to Doctor Parth

      // Set the flag to indicate that the help message has been sent
      helpSent = true;

      // Display "Thank you for choosing ambulance live assistance" till the end
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Thank you for");
      lcd.setCursor(0, 1);
      lcd.print("choosing ambulance");
      while (true) {
        // You can add any additional logic here if needed.
      }
    }

    // Check if a message is received from Doctor Parth
    if (response.indexOf("+919814056663") != -1) {
      // Forward the doctor's message to Harshul with the "Doctor" prefix
      int messageStart = response.indexOf(":") + 1;
      String doctorMessage = response.substring(messageStart);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Doctor: ");
      lcd.print(doctorMessage);

      // Send the doctor's message to Harshul without the phone number and date
      sendDoctorMessage(doctorMessage);
    }
  }
}

void sendHelpMessage(const char* phoneNumber) {
  gsm.println("AT+CMGF=1"); // Set SMS mode to text
  delay(1000);
  gsm.print("AT+CMGS=\"");
  gsm.print(phoneNumber);
  gsm.println("\"");
  delay(1000);
  gsm.print("Ambulance Assistance. Details: ");
  gsm.println(user_data);
  gsm.write(26); // Send Ctrl+Z to indicate the end of the message
}

void sendDoctorMessage(String message) {
  gsm.println("AT+CMGF=1"); // Set SMS mode to text
  delay(1000);
  gsm.println("AT+CMGS=\"+919175913123\""); // Replace with Harshul's phone number
  delay(1000);
  gsm.print("Doctor: ");
  gsm.print(message);
  gsm.write(26); // Send Ctrl+Z to indicate the end of the message
}

void sendHelpMessageToBoth(const char* phoneNumber1, const char* phoneNumber2) {
  // Send "Help is on the way" message to both phone numbers
  sendHelpMessage(phoneNumber1); // Send to nikhil
  sendHelpMessage(phoneNumber2); // Send to Doctor Parth
}

void displayScrollingText(String line1, String line2) {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(line1);
  lcd.setCursor(0, 1);
  lcd.print(line2);

  int maxLength = max(line1.length(), line2.length());
  for (int i = 0; i < maxLength + 16; i++) {
    lcd.scrollDisplayLeft();
    delay(300);
  }
}

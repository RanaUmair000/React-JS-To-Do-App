#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

// Class for passenger details
class Passenger {
public:
    string name;
    int age;
    string passportNumber;

    Passenger(string n, int a, string p) {
        name = n;
        age = a;
        passportNumber = p;
    }

    void displayPassenger() {
        cout << "Name: " << name << ", Age: " << age << ", Passport: " << passportNumber << endl;
    }
};

// Class for flight details
class Flight {
public:
    string flightID;
    string origin;
    string destination;
    int totalSeats;
    int availableSeats;

    Flight(string id, string org, string dest, int seats) {
        flightID = id;
        origin = org;
        destination = dest;
        totalSeats = seats;
        availableSeats = seats;
    }

    void displayFlight() {
        cout << "Flight ID: " << flightID << ", From: " << origin << ", To: " << destination 
             << ", Available Seats: " << availableSeats << "/" << totalSeats << endl;
    }

    bool bookTicket() {
        if (availableSeats > 0) {
            availableSeats--;
            return true;
        }
        return false;
    }

    void cancelTicket() {
        if (availableSeats < totalSeats) {
            availableSeats++;
        }
    }
};

// Node class for the linked list
class FlightNode {
public:
    Flight* flight;
    FlightNode* next;

    FlightNode(Flight* f) {
        flight = f;
        next = nullptr;
    }
};

// Linked list for storing flights
class FlightLinkedList {
private:
    FlightNode* head;

public:
    FlightLinkedList() {
        head = nullptr;
    }

    void addFlight(Flight* flight) {
        FlightNode* newNode = new FlightNode(flight);
        if (head == nullptr) {
            head = newNode;
        } else {
            FlightNode* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }

    Flight* searchFlightByID(string flightID) {
        FlightNode* temp = head;
        while (temp != nullptr) {
            if (temp->flight->flightID == flightID) {
                return temp->flight;
            }
            temp = temp->next;
        }
        return nullptr;
    }

    void displayFlights() {
        FlightNode* temp = head;
        while (temp != nullptr) {
            temp->flight->displayFlight();
            temp = temp->next;
        }
    }
};

// Reservation system class to handle reservations and cancellations
class ReservationSystem {
private:
    FlightLinkedList flightList;
    Passenger* passengers[100];
    int passengerCount;

public:
    ReservationSystem() {
        passengerCount = 0;
    }

    void addFlight(Flight* flight) {
        flightList.addFlight(flight);
    }

    void displayAllFlights() {
        flightList.displayFlights();
    }

    void bookFlight(string flightID, string name, int age, string passportNumber) {
        Flight* flight = flightList.searchFlightByID(flightID);
        if (flight != nullptr) {
            if (flight->bookTicket()) {
                passengers[passengerCount++] = new Passenger(name, age, passportNumber);
                cout << "Flight booked successfully!" << endl;
            } else {
                cout << "No available seats on this flight." << endl;
            }
        } else {
            cout << "Flight not found." << endl;
        }
    }

    void cancelFlight(string flightID, string passportNumber) {
        Flight* flight = flightList.searchFlightByID(flightID);
        if (flight != nullptr) {
            bool canceled = false;
            for (int i = 0; i < passengerCount; i++) {
                if (passengers[i]->passportNumber == passportNumber) {
                    flight->cancelTicket();
                    delete passengers[i];  // free memory
                    passengers[i] = nullptr;  // mark as canceled
                    canceled = true;
                    cout << "Flight canceled successfully!" << endl;
                    break;
                }
            }
            if (!canceled) {
                cout << "No reservation found with the provided passport number." << endl;
            }
        } else {
            cout << "Flight not found." << endl;
        }
    }
};

int main() {
    ReservationSystem system;

    // Adding some flights to the system
    system.addFlight(new Flight("A101", "New York", "London", 100));
    system.addFlight(new Flight("A102", "Los Angeles", "Tokyo", 150));
    system.addFlight(new Flight("A103", "Paris", "Berlin", 120));

    // Displaying all flights
    cout << "Available Flights: " << endl;
    system.displayAllFlights();

    // Booking a flight
    system.bookFlight("A101", "John Doe", 30, "P12345");

    // Canceling a flight
    system.cancelFlight("A101", "P12345");

    return 0;
}

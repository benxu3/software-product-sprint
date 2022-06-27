package com.google.sps.data;

/** a contact message */
public final class Contact {

  private final String name;
  private final String email;
  private final String message;

  public Contact(String name, String email, String message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
    
}

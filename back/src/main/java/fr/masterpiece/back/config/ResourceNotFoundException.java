package fr.masterpiece.back.config;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException() {
	//
    }

    public ResourceNotFoundException(String message) {
	super(message);
    }
}
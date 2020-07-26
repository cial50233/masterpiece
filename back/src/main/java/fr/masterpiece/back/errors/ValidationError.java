package fr.masterpiece.back.errors;

public class ValidationError {

    private final String attribute;

    private final String code;
    
    private final String message;


    public ValidationError(String attribute, String code, String message) {
        this.attribute = attribute;
        this.code = code;
        this.message = message;
    }

    public ValidationError(String code, String message){
        this(null, code, message);
    }

    public String getAttribute() {
        return attribute;
    }

    public String getCode() {
        return code;
    }
    
    public String getMessage() {
        return message;
    }
    
}

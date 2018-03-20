package lt.akademija.Model;

import javax.persistence.*;


public class CreateServiceCmd {

    private String serviceName;
    private String price;
    private String category;
    private String description;
    private String picture;
    private String provider;

    public String getserviceNAme() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

}/*
	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}


	public void addPrescription(Prescription prescription) {
		this.prescriptions.add(prescription);
		prescription.setPatient(this);
	}

	public void addRecord(Record record) {
		this.records.add(record);
		record.setPatient(this);
	}*/
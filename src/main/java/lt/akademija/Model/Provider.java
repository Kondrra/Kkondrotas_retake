package lt.akademija.Model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

    @Entity
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public class Provider implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.TABLE)
        private Long id;
        @Column(unique = true)
        private String providerName;
        private String city;
        private String companyId;
        private String rating;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getProviderName() {
            return providerName;
        }

        public void setProviderName(String providerName) {
            this.providerName = providerName;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getCompanyId() {
            return companyId;
        }

        public void setCompanyId(String companyId) {
            this.companyId = companyId;
        }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }


        @Override
        public String toString() {
            return String.valueOf(id);
        }


    }

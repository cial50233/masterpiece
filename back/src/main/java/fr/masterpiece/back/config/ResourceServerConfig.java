package fr.masterpiece.back.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
//@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    /**
     * Configures the HTTP security for this application.
     * <p>
     * Defines this application as stateless (no HTTP session), and disables
     * HTTP basic auth, CSRF and Spring default login form.
     *
     * @param the HttpSecurity to configure
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
		// Disable CSRF, no need with JWT if not cookie-based.
		// Disable CORS if API is public, better to enable in general.
		// Anonymous is enabled by default.
		http.httpBasic().disable()
		.csrf().disable()
		.cors().disable()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		// Allow options requests
		.authorizeRequests().antMatchers(HttpMethod.OPTIONS).permitAll().and()//allow CORS option calls
		// "/api/public/**" for anyone even anonymous
		.authorizeRequests().antMatchers(HttpMethod.GET, "/api/announcements/**").permitAll().and()
		.authorizeRequests().antMatchers(HttpMethod.POST,"/api/users","/api/accounts/**","/api/login","/api/accounts/create").permitAll()
		/*
		 * "/api/userInfo", "/api/private/**" for fully authenticated
		 * (not anonymous)
		 */
		.antMatchers("/api/userInfo","/api/me", "/ad").authenticated().and()
		.authorizeRequests().antMatchers(HttpMethod.POST, "/api/announcements/**").authenticated();
		 
    }
}
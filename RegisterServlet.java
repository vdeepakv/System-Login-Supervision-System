RegisterServlet.java:

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        // Store user data in the database
        if (registerUser(username, email, password)) {
            // Successful registration
            response.sendRedirect("login.html");
        } else {
            // Registration failed
            response.sendRedirect("register.html");
        }
    }
    
    private boolean registerUser(String username, String email, String password) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/deepakdb", "deepakuser", "deepakpass");
            String query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(query);
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            pstmt.setString(3, password);
            
            int rowsInserted = pstmt.executeUpdate();
            return rowsInserted > 0; // User inserted successfully
            
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}

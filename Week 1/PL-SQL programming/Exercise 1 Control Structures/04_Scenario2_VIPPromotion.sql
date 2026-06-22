BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            'Customer promoted to VIP: '
            || cust.CustomerID
        );
    END LOOP;

    COMMIT;
END;
/
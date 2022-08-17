package com.dhbrasil.projetoIntegrador.AlugaVerso.repository;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Reservation;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    List<Reservation> findByUser (User user);

    List<Reservation> findByLand(Land land);

    @Query("SELECT r FROM Reservation r " +
            "WHERE r.land.id = :land_id AND (" +
            "   (:initialDate >= r.dateInitial AND :initialDate <= r.dateFinal) OR " +
            "   (:endDate >= r.dateInitial AND :endDate <= r.dateFinal) " +
            ")")
    List<Reservation> findByReservationAndDates(Integer land_id,
                                                Date initialDate,
                                                Date endDate);
}

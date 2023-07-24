<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserAkses
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role)
    {
        $userRole = strtolower(auth()->user()->posisi);
        $role = strtolower($role);

        if ($userRole === $role) {
            return $next($request);
        }

        switch ($userRole) {
            case 'operator':
                return Inertia::location('operator');
                break;
            case 'resepsionis':
                return Inertia::location('resepsionis');
                break;
            default:
                return Inertia::location($userRole); 
                break;
        }
    }
}
